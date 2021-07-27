import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import Screen from "../../components/Screen";
import { screens } from "../../constants/navigation";
import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import { addressToCoords } from "../../services/geocode";
import { findPostcode } from "../../services/postcode";
import { getReport } from "../../services/report";
import useReports from "../../hooks/useReports";

const SearchLoadingScreen = ({ navigation, route }) => {
	const { address } = route.params;
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { reports, saveReport } = useReports();

	useEffect(() => {
		const fetchReport = async () => {
			setLoading(true);

			try {
				const coords = await addressToCoords(address);
				const { lat, lng } = coords?.results[0]?.geometry?.location;
				const postcode = await findPostcode(lat, lng);

				if (lat && lng && postcode) {
					const report = await getReport(lat, lng, postcode);

					//save response with address to async storage
					await saveReport({ ...report, address });

					console.log(JSON.stringify(reports));

					navigation.navigate(screens.SEARCH_RESULTS, { report });
				} else {
					//Error here?
				}
			} catch (e) {
				console.log("error", e);
				setIsError(true);
			}

			setLoading(false);
		};

		fetchReport();
	}, []);

	return (
		<Screen plainView noBackground>
			<Heading>
				<BackButton onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={40} color="black" />
				</BackButton>
				<Title category="h4">{t("searchLoadingScreen.title")}</Title>
			</Heading>
			<Content>
				{loading && <LoadingIndicator size="large" />}
				{isError && <Message>{t("searchLoadingScreen.error")}</Message>}
			</Content>
		</Screen>
	);
};

const Heading = styled.View`
	flex-direction: column;
	width: 100%;
	padding-top: 50px;
	margin-bottom: 60px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	left: 0;
`;

const Title = styled(Text)`
	font-family: ${theme.fonts.heading};
	margin-bottom: 10px;
`;

const Content = styled.View`
	align-items: center;
`;

const LoadingIndicator = styled(ActivityIndicator)`
	color: pink;
	align-self: center;
`;

const Message = styled(Text)`
	color: ${theme.colors.textSemiDark};
	width: 100%;
	text-align: center;
	font-family: ${theme.fonts.regular};
`;

export default SearchLoadingScreen;
