import React from "react";
import { StatusBar } from "react-native";
import { withTheme } from "react-native-paper";

const Bar = ({ theme }) => (
  <StatusBar
    backgroundColor={theme.colors.background}
    barStyle="light-content"
  />
);

export default withTheme(Bar);
