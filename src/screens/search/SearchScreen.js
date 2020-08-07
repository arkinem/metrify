import React from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Text } from "@ui-kitten/components";
import useLocation from "../../hooks/useLocation";
import theme from "../../constants/theme";

export default function SearchScreen({ navigation }) {
	const { location } = useLocation();
	console.log(location, "location");
	return (
		<Screen title={"Metrify"}>
			<Heading category="h4">Property address</Heading>
			<Input onPress={() => navigation.navigate("AddressModal")}>
				<AddressText>{location?.description || "Tap to select"}</AddressText>
			</Input>
			<Heading category="h4">Options</Heading>
		</Screen>
	);
}

const Heading = styled(Text)`
	margin-bottom: 10px;
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.heading};
`;

const Input = styled.TouchableOpacity`
	padding: 10px 16px;
	margin-bottom: 20px;
	border-radius: 4px;
	background: ${theme.colors.primaryLight};
	color: ${theme.colors.textLight};
`;

const AddressText = styled(Text)`
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.regular};
`;
