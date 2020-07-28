import * as React from "react";
import { Button, View } from "react-native";

export default function SearchResultsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Search")}
        title="Go to search"
      />
    </View>
  );
}
