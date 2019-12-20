import * as React from "react";
import styled from "styled-components/native";
import { withTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";

const SearchInput = ({ theme, value, onChange }) => {
  return (
    <TextInput
      mode={"outlined"}
      placeholder={"Search"}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default withTheme(SearchInput);
