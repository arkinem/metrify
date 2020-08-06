import React, { useState } from "react";
// import styled from "styled-components/native";
import { Button } from "react-native";
import Screen from "../../components/Screen";
import { Input, Text } from "@ui-kitten/components";

export default function SearchScreen({ navigation }) {
  const [value, setValue] = useState("");

  return (
    <Screen title={"Search"}>
      <Text category="h4">Addres you'd like to check</Text>
      <Input
        placeholder="Place your Text"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Go to results"
      />
    </Screen>
  );
}
