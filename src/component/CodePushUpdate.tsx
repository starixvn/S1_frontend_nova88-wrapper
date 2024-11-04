// import ProgressBar from "../components/ProgressBar";
import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import ProgressBar from "./ProgressBar";
import { useTheme } from "@react-navigation/native";

interface CodePushUpdateBar extends ViewProps {
  progress: number;
}

function CodePushUpdate({ progress = 0, ...rest }: CodePushUpdateBar) {
  const { colors } = useTheme();
  const percentage = Math.floor(progress * 100);

  return (
    <View style={[styles.wrapper, { ...rest }]}>
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
          marginBottom: 4,
        }}
      >{`正在加载资源中 (${percentage}%)`}</Text>
      <View style={{ flexDirection: "row" }}>
        <ProgressBar
          progress={progress}
          bgColor={"#c2c2c2"}
          color={colors.primary[500]}
        />
      </View>
    </View>
  );
}

export default CodePushUpdate;

const styles = StyleSheet.create({
  wrapper: {},
  labelRow: {
    marginBottom: 10,
  },
  hash: { marginLeft: "auto", color: "#c2c2c2", flex: 1, textAlign: "right" },
});
