import * as React from "react";
import styled from "styled-components/native";
import { Button, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";

export default function SearchResultsScreen({ navigation }) {
  return (
    <>
      <Header
        title="Your report"
        rightButton={
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <AntDesign name="close" size={40} color="black" />
          </TouchableOpacity>
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
