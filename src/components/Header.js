import * as React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import theme from "../constants/theme";

export default function Header({ title, rightButton }) {
	const isDrawerOpen = useIsDrawerOpen();
	const { openDrawer, closeDrawer } = useNavigation();

	return (
		<Container>
			<DrawerButton onPress={() => (!isDrawerOpen ? openDrawer() : closeDrawer())}>
				<Feather name="menu" size={30} color="black" />
			</DrawerButton>
			<Title category="h4">{title}</Title>
			<RightSection>{rightButton}</RightSection>
		</Container>
	);
}

const Container = styled.View`
	height: 70px;
	flex-direction: row;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
`;

const DrawerButton = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 40px;
	margin-right: 10px;
`;

const Title = styled(Text)`
	margin-top: 8px;
	font-family: ${theme.fonts.heading};
`;

const RightSection = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	margin-left: 10px;
`;
