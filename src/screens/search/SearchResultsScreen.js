import * as React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import Header from "../../components/Header";
import CloseButton from "../../components/CloseButton";

export default function SearchResultsScreen({ navigation }) {
  return (
    <>
      <Header
        title="Your report"
        rightButton={
          <CloseButton onPress={() => navigation.navigate("Search")} />
        }
      />
      <Container>
        <Button
          onPress={() => navigation.navigate("Search")}
          title="Go to search"
        />
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
