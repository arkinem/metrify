import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import Analytics from "appcenter-analytics";
import AppNavigator from "./src/navigation/AppNavigator.js";

Analytics.trackEvent("Metrify App opened");
AppRegistry.registerComponent(appName, () => AppNavigator);
