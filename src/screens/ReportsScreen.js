import * as React from "react";
import { Button } from "react-native";
import Screen from "../components/Screen";

export default function ReportsScreen({ navigation }) {
  return (
    <Screen title="Reports">
      <Button onPress={() => navigation.goBack()} title="Go back to search" />
    </Screen>
  );
}
