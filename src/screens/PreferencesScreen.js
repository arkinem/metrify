import * as React from "react";
import { Button } from "react-native";
import Screen from "../components/Screen";

export default function PreferencesScreen({ navigation }) {
  return (
    <Screen title="Preferences">
      <Button onPress={() => navigation.goBack()} title="Go back to search" />
    </Screen>
  );
}
