import React from "react";
import styled from "styled-components/native";
import StatusBar from "./StatusBar";
import { withTheme } from "react-native-paper";

const ScreenContainer = ({ children, theme }) => {
  const Container = styled.View`
    flex: 1;
    background: ${theme.colors.background};
    padding: 0 16px;
  `;

  return (
    <>
      <StatusBar />
      <Container>{children}</Container>
    </>
  );
};

export default withTheme(ScreenContainer);
