import * as React from "react";
import styled from "styled-components/native";
import Screen from "../components/Screen";
import { Text, Toggle } from "@ui-kitten/components";
import usePreferences from "../hooks/usePreferences";
import theme from "../constants/theme";
import TextHeading from "../components/TextHeading";

export default function PreferencesScreen({ navigation }) {
	const preferences = usePreferences();
	console.log("PREFERENCES", preferences);
	return (
		<Screen title="Preferences">
			<TextHeading>Set preferred options</TextHeading>
			<LightText>
				Changes here won't have an effect on the current search, but will be used as your defaults
				for future searches.
			</LightText>
			<OptionsContainer>
				<ToggleButton
					status={"warning"}
					checked={preferences.crimeDataPreference}
					onChange={preferences.setCrimeDataPreference}
				>
					<LightText>Analyze crime data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={preferences.airQualityPreference}
					onChange={preferences.setAirQualityPreference}
				>
					<LightText>Air quiality data</LightText>
				</ToggleButton>
				<ToggleButton
					status={"warning"}
					checked={preferences.averagePricesPreference}
					onChange={preferences.setAveragePricesPreference}
				>
					<LightText>Include average prices information</LightText>
				</ToggleButton>
			</OptionsContainer>
		</Screen>
	);
}

const LightText = styled(Text)`
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.regular};
	margin-bottom: 20px;
`;

const ToggleButton = styled(Toggle)`
	margin-bottom: 16px;
`;

const OptionsContainer = styled.View`
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;
`;
