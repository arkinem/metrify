import * as React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, rightButton }) {
  const isDrawerOpen = useIsDrawerOpen();
  const { openDrawer, closeDrawer } = useNavigation();

  return (
    <Container>
      <DrawerButton
        onPress={() => (!isDrawerOpen ? openDrawer() : closeDrawer())}
      >
        <Feather name="menu" size={30} color="black" />
      </DrawerButton>
      <Title>{title}</Title>
      {rightButton && (
        <RightSection justify="flexEnd">{rightButton}</RightSection>
      )}
    </Container>
  );
}

const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: ${Constants.statusBarHeight}px;
`;

const DrawerButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const Title = styled.Text`
  text-align: center;
  margin-left: 80px;
  font-size: 22px;
`;

const RightSection = styled.View`
  margin-left: auto;
`;
