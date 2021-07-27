import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import Screen from "../../components/Screen";
import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import Report from "../../components/Report";
import { screens } from "../../constants/navigation";

const SearchResultsScreen = ({ navigation, route }) => {
	const { report } = route.params;

	return (
		<Screen plainView noBackground noPadding>
			<Heading>
				<BackButton onPress={() => navigation.navigate(screens.SEARCH)}>
					<AntDesign name="arrowleft" size={40} color="black" />
				</BackButton>
				<Title category="h4">{t("searchResultsScreen.title")}</Title>
			</Heading>
			<Content showsVerticalScrollIndicator={false}>
				<Report report={report} />
			</Content>
		</Screen>
	);
};

const Heading = styled.View`
	flex-direction: column;
	width: 100%;
	padding-top: 50px;
	margin: 15px 20px 0 20px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	left: 0;
`;

const Title = styled(Text)`
	font-family: ${theme.fonts.heading};
	margin-bottom: 10px;
`;

const Content = styled.ScrollView.attrs(() => ({
	contentContainerStyle: {
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 5,
	},
}))``;

const Message = styled(Text)`
	color: ${theme.colors.textSemiDark};
	width: 100%;
	text-align: center;
	font-family: ${theme.fonts.regular};
`;

const Card = styled.View`
	width: 100%;
	padding: 10px;
	border: 4px solid ${theme.colors.textSemiDark};
	border-radius: 20px;
	margin-bottom: 20px;
`;

export default SearchResultsScreen;
