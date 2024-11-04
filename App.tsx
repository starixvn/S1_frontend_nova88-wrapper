import notifee from "@notifee/react-native";
import messaging from "@react-native-firebase/messaging";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ScreenOrientation from "expo-screen-orientation";
import { LocalizationProviderRedux } from "hooks/useLocalization";
import useNotification from "hooks/useNotification";
import CodePushProvider from "providers/CodePushProvider";
import { useEffect } from "react";
import { NativeModules, Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import HomePage from "screens/Home";
import OtherPage from "screens/Other";
import store from "store";
import { navigationRef } from "utilities/rootNavigationRef";

export type RootStackParamList = {
  HomePage: undefined;
  OtherPage: undefined;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

function AppContent() {
  useNotification();
  // Register background handler
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    // no op
  });
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    console.log("Authorization status:", authStatus);
  }

  async function subscribeToTopic() {
    messaging().subscribeToTopic("ALL");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    requestUserPermission();
    subscribeToTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Stack = createStackNavigator<RootStackParamList>();
  const deviceLanguage =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  // console.log(deviceLanguage);

  return (
    <Provider store={store}>
      <LocalizationProviderRedux>
        <CodePushProvider>
          <View style={styles.container}>
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="OtherPage" component={OtherPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </CodePushProvider>
      </LocalizationProviderRedux>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
