import React from "react";
import styled from "styled-components/native";
import { withTheme } from "react-native-paper";

const HeaderLabel = ({ children, theme }) => {
  const Text = styled.Text`
    color: ${theme.colors.text};
    padding: 30px 0;
    font-size: 30px;
  `;

  return <Text>{children}</Text>;
};

export default withTheme(HeaderLabel);
