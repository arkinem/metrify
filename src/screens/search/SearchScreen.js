import React, { useState } from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Text, Toggle } from "@ui-kitten/components";
import theme from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import logo from "../../../assets/transparent-logo.png";
import TextHeading from "../../components/TextHeading";
import useReportForm from "../../hooks/useReportForm";
import { getReport } from "../../services/report";
import { addressToCoords } from "../../services/geocode";

export default function SearchScreen({ navigation }) {
	const form = useReportForm();
	const [imageContainerSize, setImageContainerSize] = useState({ height: 0, width: 0 });

	const onSubmit = async () => {
		try {
			const address = form.location?.description;
			const coords = await addressToCoords(address);
			const { lat, lng } = coords?.results[0]?.geometry?.location;
			if (lat && lng) {
				const response = await getReport(lat, lng);
				console.log(response);
			} else {
				//Error here?
			}
		} catch (e) {
			console.log("onSubmit", e);
		}
	};

	return (
		<Screen title={"Check location"}>
			<TextHeading>Property address</TextHeading>
			<Input>
				<AddressButton onPress={() => navigation.navigate("AddressModal")}>
					<LightText>{form.location?.description || "Tap to select"}</LightText>
				</AddressButton>
				{form.location && (
					<ClearButton onPress={() => form.setLocation(null)}>
						<Feather name={"x-circle"} size={26} color={theme.colors.textLight} />
					</ClearButton>
				)}
			</Input>

			<TextHeading>Options</TextHeading>
			<OptionsContainer>
				<ToggleButton
					status={"warning"}
					checked={form.includeCrimeData}
					onChange={form.setIncludeCrimeData}
				>
					<LightText>Analyze crime data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={form.includeAirQualityData}
					onChange={form.setIncludeAirQualityData}
				>
					<LightText>Air quiality data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={form.includeAveragePrices}
					onChange={form.setIncludeAveragePrices}
				>
					<LightText>Include average prices information</LightText>
				</ToggleButton>
			</OptionsContainer>
			<SubmitButton activeOpacity={0.75} onPress={onSubmit}>
				<TextHeading noMargin>Get report</TextHeading>
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
