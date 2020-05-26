import * as React from "react";
import styled from "styled-components/native";
import { withTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";

const SearchInput = ({ theme, value, onChange, ...rest }) => {
  return (
    <TextInput
      mode={"outlined"}
      placeholder={"Search"}
      value={value}
      onChangeText={onChange}
      {...rest}
    />
  );
};

export default withTheme(SearchInput);
