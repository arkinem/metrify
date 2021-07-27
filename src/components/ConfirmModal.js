import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

import theme from "../constants/theme";
import { t } from "../lib/i18n/helpers";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
	return (
		<Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={onClose}>
			<Container>
				<Contentcontainer style={theme.shadow}>
					<Title category="h4">{t("confirmModal.title")}</Title>
					<Subtitle>{t("confirmModal.subtitle")}</Subtitle>
					<ButtonsContainer>
						<ActionButton size="small" appearance="outline" onPress={onClose}>
							<Title>{t("confirmModal.close")}</Title>
						</ActionButton>
						<ActionButton
							size="small"
							appearance="outline"
							onPress={() => {
								onConfirm?.();
								onClose();
							}}
						>
							<Title>{t("confirmModal.confirm")}</Title>
						</ActionButton>
					</ButtonsContainer>
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

const Contentcontainer = styled.View`
	margin: 20px;
	background-color: white;
	border-radius: 20px;
	padding: 22px;
	align-items: center;
`;

const Title = styled(Text)`
	font-family: ${theme.fonts.subheading};
	color: ${theme.colors.primary};
	width: 100%;
`;

const Subtitle = styled(Text)`
	font-size: 16px;
	color: ${theme.colors.textDark};
	font-family: ${theme.fonts.regular};
	width: 100%;
`;

const ButtonsContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	margin-top: 24px;
	width: 70%;
`;

const ActionButton = styled(Button)`
	width: 90px;
`;

export default ConfirmModal;
