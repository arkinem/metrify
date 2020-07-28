import * as React from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}
