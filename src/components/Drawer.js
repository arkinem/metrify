import * as React from "react";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text } from "@ui-kitten/components";
import theme from "../constants/theme";
import { Feather } from "@expo/vector-icons";
const { colors, fonts } = theme;

export default function Drawer({ state, navigation, ...props }) {
	const { routes, index } = state;
	const activeItem = routes[index]?.name;

	const DrawerItem = ({ name, iconName }) => {
		const active = activeItem === name;
		return (
			<NavOption activeOpacity={0.7} onPress={() => navigation.navigate(name)}>
				<Icon name={iconName} size={30} color={active ? colors.primaryLight : colors.textDark} />
				<NavOptionLabel active={active} category="h4">
					{name}
				</NavOptionLabel>
			</NavOption>
		);
	};

	return (
		<DrawerContentScrollView state={state} navigation={navigation} {...props}>
			<Container>
				<DrawerItem name="Search" iconName={"search"} />
				<DrawerItem name="Reports" iconName={"file-text"} />
				<DrawerItem name="Preferences" iconName={"settings"} />
			</Container>
		</DrawerContentScrollView>
	);
}

const Container = styled.View`
	margin-top: ${Constants.statusBarHeight}px;
	flex: 1;
`;

const NavOption = styled.TouchableOpacity`
	height: 55px;
	line-height: 45px;
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const NavOptionLabel = styled(Text)`
	margin-top: 5px;
	font-family: ${fonts.subheading};
	color: ${({ active }) => (active ? colors.primaryLight : colors.textDark)};
`;

const Icon = styled(Feather)`
	width: 45px;
`;
