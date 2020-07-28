import * as React from "react";
import { Button, View } from "react-native";

export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Preferences")}
        title="Go to preferences"
      />
      <Button
        onPress={() => navigation.navigate("Reports")}
        title="Go to past reports"
      />
    </View>
  );
}
