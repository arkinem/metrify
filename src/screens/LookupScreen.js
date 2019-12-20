import React from "react";
import styled from "styled-components/native";
import ScreenContainer from "../components/ScreenContainer";
import HeaderLabel from "../components/HeaderLabel";
import strings from "../localization/strings";
import SearchInput from "../components/SearchInput";

const LookupScreen = () => {
  return (
    <ScreenContainer>
      <HeaderLabel>{strings.Type_an_address}</HeaderLabel>
      <SearchInput />
    </ScreenContainer>
  );
};

export default LookupScreen;

const Text = styled.Text`
  color: white;
`;
