import React from "react";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import Screen from "../../components/Screen";
import theme from "../../constants/theme";
import Report from "../../components/Report";

const ReportScreen = ({ route, navigation }) => {
	const { report } = route.params;

	return (
		<Screen plainView noBackground noPadding>
			<Heading>
				<BackButton onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={40} color="black" />
				</BackButton>
				<Title category="h4">{report.address}</Title>
			</Heading>
			<Content>
				<Report report={report} />
			</Content>
		</Screen>
	);
};

const Heading = styled.View`
	flex-direction: column;
	width: 90%;
	padding-top: 50px;
	margin: 15px 20px 0 20px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	left: 0;
`;

const Title = styled(Text)`
	font-family: ${theme.fonts.heading};
	margin-bottom: 16px;
`;

const Content = styled.ScrollView.attrs(() => ({
	contentContainerStyle: {
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 5,
	},
}))`
	flex: 1;
`;

export default ReportScreen;
