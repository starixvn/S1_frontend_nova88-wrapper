import { Dimensions, PixelRatio, Platform } from "react-native";
import { getVersion } from "react-native-device-info";
import messaging from "@react-native-firebase/messaging";
import { LANGUAGES } from "./languages";

export const currencyListMapper: { [key: number]: string } = {
  2: "MYR",
  4: "THB",
  15: "IDR",
  51: "VND",
  61: "INR",
  13: "CNY",
  3: "USD",
  74: "BDT",
  72: "USD", //Cambodia use USD
};

export const isTabletRatio = () => {
  /* dynamic width to adjust tablet view  */
  const initialLayout = Dimensions.get("window");
  return initialLayout.height / initialLayout.width <= 1.6;
};

const fontScale =
  Dimensions.get("window").width / (isTabletRatio() ? 600 : 375);

export const getScaledSize = (size: number) => {
  const newSize = size * fontScale;

  let newSizeInUnit = 0;
  if (Platform.OS === "ios") {
    newSizeInUnit = Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    newSizeInUnit = Math.round(PixelRatio.roundToNearestPixel(newSize - 1));
  }
  return newSizeInUnit;
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface Version {
  major: number;
  minor: number;
  patch: number;
  iosUrl: string;
  androidUrl: string;
  changes: string[];
}

export function isNewVersionAvailable(remoteVersion: Version) {
  const currentVersion = getVersion();
  console.log("Remote version :", remoteVersion);
  const { major, minor, patch } = remoteVersion;
  const newVersionCode = major * 10000 + minor * 100 + patch;

  const [majorApp, minorApp, patchApp] = currentVersion.split(".");
  const currentVersionCode =
    parseInt(majorApp, 10) * 10000 +
    parseInt(minorApp, 10) * 100 +
    parseInt(patchApp, 10);

  return newVersionCode > currentVersionCode;
}

export async function subscribeToCurrencyOnly({
  locale,
  currencyId,
}: {
  locale: string;
  currencyId?: number;
}) {
  try {
    let currencyToSub = "MYR";

    let currenciesToUnSub = Object.keys(LANGUAGES).map(
      (k) => LANGUAGES[parseInt(k, 10)]?.currency
    );
    if (currencyId) {
      currencyToSub = currencyListMapper[currencyId];
    } else {
      Object.keys(currencyListMapper).every((c) => {
        const keyNumber = parseInt(c, 10);

        const language = LANGUAGES[keyNumber];
        console.log("locale", locale, language);
        if (language) {
          const matched = language.languages.some((l) => l.code === locale);
          if (matched) {
            currencyToSub = language.currency;
            return false;
          }
        }

        return true;
      });
    }

    messaging().subscribeToTopic(currencyToSub);

    const subIndex = currenciesToUnSub.findIndex((c) => c === currencyToSub);
    if (subIndex > -1) {
      currenciesToUnSub.splice(subIndex, 1);
    }

    currenciesToUnSub.forEach(
      async (unsubTopic) =>
        unsubTopic && (await messaging().unsubscribeFromTopic(unsubTopic))
    );
  } catch (e) {
    console.log("subscribeToCurrencyOnly error", e);
  }
}
