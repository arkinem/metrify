import * as React from "react";
// import styled from "styled-components/native";
import { Button } from "react-native";
import Screen from "../../components/Screen";

export default function SearchScreen({ navigation }) {
  return (
    <Screen title={"Search"}>
      <Button
        onPress={() => navigation.navigate("Results")}
        title="Go to results"
      />
    </Screen>
  );
}
