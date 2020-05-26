import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import Analytics from "appcenter-analytics";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator.js";
import { PaperTheme } from "./src/config.js";

Analytics.trackEvent("Metrify App opened");

const App = () => (
  <PaperProvider theme={PaperTheme}>
    <AppNavigator />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => App);
