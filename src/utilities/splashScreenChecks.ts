import { firebase } from "@react-native-firebase/firestore";
import { Linking, Platform } from "react-native";
import {
  SplashScreenContext,
  SplashScreenHandler,
} from "../hooks/useSplashScreen";
import { Version, isNewVersionAvailable } from "./helper";
import { AlertActions } from "modules/alert";

export function checkVersionUpdated(
  context: SplashScreenContext
): () => Promise<SplashScreenHandler> {
  return async () => {
    const { dispatch, t } = context;
    const versions = await firebase.firestore().collection("versions").get();
    const latestVersion = (await versions.docs[
      versions.docs.length - 1
    ].data()) as Version;

    const isUptoDate = !isNewVersionAvailable(latestVersion);

    console.log("SPLASHSCREEN - binary version status", isUptoDate);

    const { major, minor, patch } = latestVersion;

    return {
      result: isUptoDate,
      handler: () => {
        if (!isUptoDate)
          dispatch(
            AlertActions.addAlert({
              title: t("forceDownload.title", {
                version: `${major}.${minor}.${patch}`,
              }),
              message:
                `${t("forceDownload.message")}\n` +
                latestVersion.changes.reduce((c, s) => `${c}- ${s}\n`, ""),
              actions: [
                {
                  label: t("forceDownload.download"),
                  onPress: () => {
                    try {
                      Linking.openURL(
                        Platform.OS === "android"
                          ? latestVersion.androidUrl
                          : latestVersion.iosUrl
                      );
                    } catch (e) {}
                  },
                  disableAutoClose: true,
                },
              ],
              persistent: true,
              hideCloseButton: true,
            })
          );
      },
    };
  };
}