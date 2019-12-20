import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const OtherScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container></Container>
    </>
  );
};

export default OtherScreen;

const Container = styled.View`
  flex: 1;
  background: pink;
`;
