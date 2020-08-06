import * as React from "react";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider } from "@ui-kitten/components";
import AppNavigation from "./src/navigation/AppNavigation";
import { default as theme } from "./src/constants/theme.json";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AppNavigation />
      <StatusBar style="auto" />
    </ApplicationProvider>
  );
}
