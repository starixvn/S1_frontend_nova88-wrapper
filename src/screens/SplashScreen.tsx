import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CodePush from "react-native-code-push";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SplashImage from "assets/images/splash.jpg";
import CodePushUpdate from "component/CodePushUpdate";
import { useCodePush } from "providers/CodePushProvider";
import useSplashScreen from "hooks/useSplashScreen";
import { checkVersionUpdated } from "utilities/splashScreenChecks";
import useLocalization from "hooks/useLocalization";
import { useDispatch, useSelector } from "react-redux";
import { getVersion } from "react-native-device-info";
import { useAppSelector } from "store";

type SplashScreenProps = {
  onSplashScreenReady: () => void;
};

const SplashScreen = ({
  navigation,
  onSplashScreenReady
}: SplashScreenProps) => {
  const currentVersion = getVersion();
  const { bottom } = useSafeAreaInsets();
  const { t } = useLocalization();
  const dispatch = useDispatch();

  const {
    status: codePushStatus,
    progress,
    isCodePushReady,
    isCodePushSkipAble
  } = useCodePush();

  const showCodePushDownload =
    !isCodePushSkipAble &&
    codePushStatus === CodePush.SyncStatus.DOWNLOADING_PACKAGE;

  const { status: splashScreenReady } = useSplashScreen(
    { mandatorySync: [checkVersionUpdated] },
    codePushStatus === CodePush.SyncStatus.UP_TO_DATE,
    {
      context: {
        dispatch,
        t,
        navigation
      }
    }
  );

  useEffect(() => {
    if (splashScreenReady) {
      onSplashScreenReady();
    }
  }, [splashScreenReady]);

  return (
    <ImageBackground
      style={styles.root}
      imageStyle={styles.imageBackground}
      source={SplashImage}
    >
      <View style={styles.noteStyle}>
        <Text
          style={{
            paddingBottom: 12,
            fontSize: 16,
            fontWeight: "bold",
            color: "#14335A"
          }}
        >
          {t("splashScreen.dear")}
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 14, color: "#14335A" }}>
          {t("splashScreen.note")}
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: bottom,
          left: 0,
          right: 0,
          paddingHorizontal: bottom
        }}
      >
        {showCodePushDownload && (
          <CodePushUpdate style={styles.codePush} progress={progress} />
        )}
        <Text style={styles.cornerLabel}>{currentVersion}</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    elevation: 1
  },
  codePush: {
    position: "absolute",
    left: 0,
    right: 0,
    marginHorizontal: "30%"
  },
  cornerLabel: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontWeight: "bold",
    opacity: 0.8
  },
  noteStyle: {
    position: "absolute",
    top: "20%",
    paddingHorizontal: 48
  },
  imageBackground: {
    resizeMode: "cover",
    height: "100%"
  }
});
