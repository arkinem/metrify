import { Button, List, Text } from "@ui-kitten/components";
import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";

const RestaurantsModal = ({ restaurants, isOpen, onClose }) => {
	const renderItem = ({ item, index }) => {
		const address =
			item.address.slice(0, 2) === ", " ? item.address.slice(2, item.address.length) : item.address;

		return (
			<ListRow>
				<RestaurantName>{item.name} </RestaurantName>
				<Label>{address} </Label>
				<Label>{item.type} </Label>
			</ListRow>
		);
	};

	return (
		<Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={onClose}>
			<Container>
				<Contentcontainer style={theme.shadow}>
					<SubTitle category="h4">{t("report.restaurants.modal.title")}</SubTitle>
					<RestaurantsList
						showsVerticalScrollIndicator={false}
						data={restaurants}
						renderItem={renderItem}
					/>
					<Button size="small" appearance="outline" onPress={onClose}>
						<SubTitle>{t("report.restaurants.modal.close")}</SubTitle>
					</Button>
				</Contentcontainer>
			</Container>
		</Modal>
	);
};

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: 22px;
`;

const RestaurantsList = styled(List)`
	width: 100%;
	margin-bottom: 20px;
`;

const Contentcontainer = styled.View`
	margin: 20px;
	background-color: white;
	border-radius: 20px;
	padding: 22px;
	align-items: center;
	width: 96%;
	max-height: 80%;
`;

const SubTitle = styled(Text)`
	font-family: ${theme.fonts.subheading};
	color: ${theme.colors.primary};
	width: 100%;
`;

const ListRow = styled.View`
	background-color: white;
	padding-bottom: 12px;
`;

const Label = styled(Text)`
	font-size: 14px;
	color: ${theme.colors.textSemiDark};
	font-family: ${theme.fonts.regular};
	margin-top: 6px;
`;

const RestaurantName = styled(Text)`
	font-size: 16px;
	color: ${theme.colors.textDark};
	font-family: ${theme.fonts.subheading};
	margin-bottom: -10px;
`;

export default RestaurantsModal;
