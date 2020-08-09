import React, { useState } from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Text, Toggle } from "@ui-kitten/components";
import useLocation from "../../hooks/useLocation";
import theme from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import logo from "../../../assets/transparent-logo.png";

export default function SearchScreen({ navigation }) {
	const { location, setLocation } = useLocation();
	const [includeCrimeData, setIncludeCrimeData] = useState(true);
	const [includeAirQualityData, setIncludeAirQualityData] = useState(true);
	const [includeAveragePrices, setIncludeAveragePrices] = useState(true);
	const [imageContainerSize, setImageContainerSize] = useState({ height: 0, width: 0 });

	console.log(location, "location");
	return (
		<Screen title={"Check location"}>
			<Heading category="h4">Property address</Heading>
			<Input>
				<AddressButton onPress={() => navigation.navigate("AddressModal")}>
					<LightText>{location?.description || "Tap to select"}</LightText>
				</AddressButton>
				{location && (
					<ClearButton onPress={() => setLocation(null)}>
						<Feather name={"x-circle"} size={26} color={theme.colors.textLight} />
					</ClearButton>
				)}
			</Input>

			<Heading category="h4">Options</Heading>
			<OptionsContainer>
				<ToggleButton status={"warning"} checked={includeCrimeData} onChange={setIncludeCrimeData}>
					<LightText>Analyze crime data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={includeAirQualityData}
					onChange={setIncludeAirQualityData}
				>
					<LightText>Air quiality data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={includeAveragePrices}
					onChange={setIncludeAveragePrices}
				>
					<LightText>Include average prices information</LightText>
				</ToggleButton>
			</OptionsContainer>
			<SubmitButton activeOpacity={0.75} onPress={() => console.log("ee")}>
				<Heading category="h2" noMargin>
					Get report
				</Heading>
			</SubmitButton>
			<LogoContainer
				onLayout={(e) => {
					const { width, height } = e.nativeEvent.layout;
					setImageContainerSize({ width, height });
				}}
			>
				<LogoImage resizeMode={"contain"} source={logo} dimensions={imageContainerSize} />
			</LogoContainer>
		</Screen>
	);
}

const Heading = styled(Text)`
	margin-bottom: ${({ noMargin }) => (noMargin ? 0 : 10)}px;
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.heading};
`;

const Input = styled.TouchableOpacity`
	flex-direction: row;
	margin-bottom: 20px;
	border-radius: 8px;
	background: ${theme.colors.primaryLight};
	color: ${theme.colors.textLight};
	align-items: center;
`;

const LightText = styled(Text)`
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.regular};
`;

const ToggleButton = styled(Toggle)`
	margin-bottom: 16px;
`;

const OptionsContainer = styled.View`
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;
`;

const ClearButton = styled.TouchableOpacity`
	margin-left: auto;
	padding: 10px 16px;
`;

const AddressButton = styled(LightText)`
	flex: 1;
	padding: 10px 16px;
`;

const SubmitButton = styled.TouchableOpacity`
	background: #2f1a4f;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	margin-bottom: 12px;
`;

const LogoContainer = styled.View`
	flex: 1;
	margin: 12px;
	justify-content: flex-end;
`;

const LogoImage = styled.Image`
	height: ${({ dimensions }) => dimensions?.height}px;
	width: ${({ dimensions }) => dimensions?.width}px;
	max-width: 100px;
	max-height: 100px;
	align-self: center;
`;
