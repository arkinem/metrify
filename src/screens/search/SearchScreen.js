import React, { useState } from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Text } from "@ui-kitten/components";
import useLocation from "../../hooks/useLocation";

export default function SearchScreen({ navigation }) {
  const { location } = useLocation();
  console.log(location, "location");
  return (
    <Screen title={"Search"}>
      <InputTitle category="h4">Property address</InputTitle>
      <Input onPress={() => navigation.navigate("AddressModal")}>
        <AddressText>{location?.description || "Press to select"}</AddressText>
      </Input>
    </Screen>
  );
}

const InputTitle = styled(Text)`
  color: white;
  margin-bottom: 20px;
`;

const Input = styled.TouchableOpacity`
  background: #8965a8;
  color: white;
  border-radius: 4px;
  padding: 10px 16px;
`;

const AddressText = styled(Text)`
  color: white;
`;
