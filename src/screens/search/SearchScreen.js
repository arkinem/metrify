import * as React from "react";
import { Button, View } from "react-native";

export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Results")}
        title="Go to results"
      />
    </View>
  );
}
