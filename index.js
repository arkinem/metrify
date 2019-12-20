import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Analytics from "appcenter-analytics";
import MainScreen from "./src/screens/MainScreen.js";

Analytics.trackEvent("Metrify App opened");
AppRegistry.registerComponent(appName, () => MainScreen);
