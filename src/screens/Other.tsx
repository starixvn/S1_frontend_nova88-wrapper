import { DOMAIN } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import Error from "component/Error";
import LoadingWebView from "component/loading/LoadingWebView";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useRef } from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView, { WebViewNavigation } from "react-native-webview";
import { getScaledSize } from "utilities/helper";
import { INJECTED_JAVASCRIPT } from "./Home";

const MainDomain = [DOMAIN, "https://m.nova88.net"];

const OtherPage = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const { params } = useRoute();

  const webRef = useRef<WebView>(null);

  useEffect(() => {
    ScreenOrientation.unlockAsync();

    return () => {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  const NAV_HEIGHT = getScaledSize(50);

  const navChange = (e: WebViewNavigation) => {
    if (webRef.current) {
      webRef.current.injectJavaScript(INJECTED_JAVASCRIPT);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ paddingTop: top, backgroundColor: "#0a1b38" }} />
      <View
        style={{
          height: NAV_HEIGHT,
          paddingRight: 4,
          backgroundColor: "#0a1b38",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../assets/images/btnBack.png")}
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.7 }} />
      </View>
      <WebView
        source={{ uri: params.url }}
        // userAgent="Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 [FBAN/FBIOS;FBAV/238.0.0.50.115;FBBV/171859800;FBDV/iPad2,5;FBMD/iPad;FBSN/iPhone OS;FBSV/9.3.5;FBSS/1;FBID/tablet;FBLC/en_US;FBOP/5;FBRV/0;FBCR/]"
        originWhitelist={["*"]}
        textZoom={100}
        // sharedCookiesEnabled
        scalesPageToFit
        bounces={false}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback
        allowsFullscreenVideo={false}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptCanOpenWindowsAutomatically={true}
        setSupportMultipleWindows={false}
        startInLoadingState={true}
        mixedContentMode="compatibility"
        webviewDebuggingEnabled
        onNavigationStateChange={(e) => {
          // Avoid loading invalid webpage
          const isMainDomainButNotGameLaunchUrl =
            MainDomain.some((d) => e.url.startsWith(d)) &&
            e.canGoBack === true &&
            !e.url.includes("entPage") && // entPage is H5 launch game Url,
            !e.url.includes("launcher"); // launcher is H5 launch game url for Exchange and PG

          if (isMainDomainButNotGameLaunchUrl || e.url === "about:blank") {
            navigation.goBack();
            return false;
          }
          ///////////

          // if (Platform.OS === "ios") {
          //   navChange(e);
          // }
        }}
        // onLoadProgress={(e) => {
        //   if (Platform.OS === "android" && e.nativeEvent.progress === 1) {
        //     navChange(e);
        //   }
        // }}
        renderError={(errorDomain, errorCode, errorDesc) => {
          return (
            <Error
              errorCode={errorCode}
              errorDomain={errorDomain}
              errorDesc={errorDesc}
            />
          );
        }}
        renderLoading={() => (
          <View
            style={{
              position: "absolute",
              top: 0,
              alignItems: "center",
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <LoadingWebView />
          </View>
        )}
      />
    </View>
  );
};

export default OtherPage;
