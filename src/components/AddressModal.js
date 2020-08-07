import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Screen from "./Screen";
import { Input, Divider, List, ListItem, Text } from "@ui-kitten/components";
import useDebounce from "../hooks/useDebounce";
import { getPlacesAutoComplete } from "../service/places";
import { AntDesign } from "@expo/vector-icons";
import { t } from "../i18n/helpers";
import useLocation from "../hooks/useLocation";
import theme from "../constants/theme";

export default function AddressModal({ navigation }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const { setLocation, location } = useLocation();

	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	useEffect(() => {
		async function fetchData() {
			setIsSearching(true);
			const results = await getPlacesAutoComplete(debouncedSearchTerm);
			setResults(results);
			setIsSearching(false);
		}

		if (debouncedSearchTerm.length > 2) {
			fetchData();
		} else {
			setResults([]);
		}
	}, [debouncedSearchTerm]);

	const renderItem = ({ item }) => {
		const { structured_formatting: location } = item;

		return (
			<ListItem
				title={<ListItemTitle>{location?.main_text}</ListItemTitle>}
				description={<ListItemDescription>{location?.secondary_text}</ListItemDescription>}
				onPress={() => {
					setLocation(item);
					navigation.goBack();
				}}
			/>
		);
	};

	return (
		<Screen plainView noBackground>
			<Heading>
				<BackButton onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={40} color="black" />
				</BackButton>
				<Title category="h4">{t("addressModal.inputTitle")}</Title>
				<Input
					autoFocus
					size="large"
					placeholder={t("addressModal.inputPlaceholder")}
					value={searchTerm}
					onChangeText={setSearchTerm}
					textStyle={{ fontFamily: theme.fonts.regular }}
				/>
			</Heading>
			<ResultsList
				style={{ fontFamily: theme.fonts.title }}
				data={results}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
			/>
		</Screen>
	);
}

const Heading = styled.View`
	flex-direction: column;
	width: 100%;
	padding-top: 50px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	left: 0;
`;

const ResultsList = styled(List)`
	background: #fff;
`;

const Title = styled(Text)`
	font-family: ${theme.fonts.heading};
	margin-bottom: 10px;
`;

const ListItemTitle = styled(Text)`
	font-family: ${theme.fonts.subheading};
`;

const ListItemDescription = styled(Text)`
	color: ${theme.colors.textSemiDark};
	font-size: 13px;
	font-family: ${theme.fonts.regular};
`;
