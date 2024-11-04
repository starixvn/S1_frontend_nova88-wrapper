import { useTheme } from "@react-navigation/native";
import useLocalization from "hooks/useLocalization";
import React, { FC } from "react";
import { WebView } from "react-native-webview";

const LoadingWebView: FC = ({ ...rest }) => {
  const { t } = useLocalization();
  const { colors } = useTheme();
  let html = require("./loading.ts")();
  html = html.replace("{TextPlaceholder}", "Loading");

  return (
    <WebView
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
      containerStyle={{ width: "100%" }}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      source={{
        html: html,
      }}
    />
  );
};

export default LoadingWebView;
