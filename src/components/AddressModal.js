import * as React from "react";
import styled from "styled-components/native";
import Close from "./CloseButton";
import Screen from "./Screen";
import { Input } from "@ui-kitten/components";

export default function AddressModal({ navigation }) {
  const [value, setValue] = React.useState("");

  return (
    <Screen noBackground>
      <Heading>
        <Input
          size="large"
          placeholder="Type localization here"
          value={value}
          onChangeText={setValue}
        />
        <CloseButton onPress={() => navigation.goBack()} />
      </Heading>
    </Screen>
  );
}

const Heading = styled.View`
  flex-direction: row;
  height: 70px;
  width: 100%;
  align-items: center;
`;

const CloseButton = styled(Close)`
  margin-left: auto;
`;
