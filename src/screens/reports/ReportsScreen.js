import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import Screen from "../../components/Screen";
import useReports from "../../hooks/useReports";
import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import ConfirmModal from "../../components/ConfirmModal";
import { screens } from "../../constants/navigation";

const ReportsScreen = ({ navigation }) => {
	const { reports = [], removeAllReports } = useReports();
	const [confirmModalOpen, setConfirmModalOpen] = useState(false);

	return (
		<Screen title={t("reportsScreen.title")}>
			{reports.length > 0 ? (
				<ScrollView showsVerticalScrollIndicator={false}>
					{[...reports].reverse().map((report, key) => (
						<TouchableOpacity
							key={key}
							activeOpacity={0.8}
							onPress={() => navigation.navigate(screens.REPORT, { report })}
						>
							<ReportCard style={theme.shadow}>
								<Label category="h6">{report.address}</Label>
							</ReportCard>
						</TouchableOpacity>
					))}

					<ClearButton appearance="filled" onPress={() => setConfirmModalOpen(true)}>
						{t("reportsScreen.clearAll")}
					</ClearButton>
				</ScrollView>
			) : null}
			{reports.length === 0 ? (
				<ErrorMessage category="h6">{t("reportsScreen.empty")}</ErrorMessage>
			) : null}
			<ConfirmModal
				isOpen={confirmModalOpen}
				onClose={() => setConfirmModalOpen(false)}
				onConfirm={() => removeAllReports()}
			/>
		</Screen>
	);
};

const ReportCard = styled.View`
	background: white;
	padding: 16px;
	border-radius: 10px;
	margin-bottom: 16px;
`;

const Label = styled(Text)`
	font-family: ${theme.fonts.heading};
`;

const ClearButton = styled(Button)`
	margin-top: 10px;
	width: 180px;
	align-self: center;
	background-color: ${theme.colors.primaryLight};
`;

const ErrorMessage = styled(Text)`
	margin-top: 50px;
	text-align: center;
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.subheading};
`;

export default ReportsScreen;
