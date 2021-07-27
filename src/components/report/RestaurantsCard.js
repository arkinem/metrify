import { Button, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";
import RestaurantsModal from "./RestaurantsModal";

const RestaurantsCard = ({ restaurants }) => {
	const { average_hygiene, rating, nearby } = restaurants.data;
	const [restaurantsModalOpen, setRestaurantsModalOpen] = useState(false);

	return (
		<Card>
			<CardTitle>{t("report.restaurants.title")}</CardTitle>

			<LabeledValue label={t("report.restaurants.avgHygiene")} value={average_hygiene} />
			<LabeledValue label={t("report.restaurants.rating")} value={rating} />
			<LabeledValue label={t("report.restaurants.nearby")} value={nearby.length} />
			<Row>
				<Button size="tiny" appearance="outline" onPress={() => setRestaurantsModalOpen(true)}>
					<SubTitle>{t("report.restaurants.all")}</SubTitle>
				</Button>
			</Row>
			<RestaurantsModal
				isOpen={restaurantsModalOpen}
				onClose={() => setRestaurantsModalOpen(false)}
				restaurants={nearby}
			/>
		</Card>
	);
};

const SubTitle = styled(Text)`
	font-family: ${theme.fonts.subheading};
	color: ${theme.colors.primary};
`;

const Row = styled.View`
	flex-direction: row;
	margin-top: 12px;
	justify-content: center;
`;

export default RestaurantsCard;
