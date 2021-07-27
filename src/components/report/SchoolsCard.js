import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";
import SchoolsModal from "./SchoolsModal";

const SchoolsCard = ({ schools }) => {
	if (!schools?.data) {
		return null;
	}

	const { state, independent } = schools.data;
	const [stateSchoolsModalOpen, setStateSchoolsModalOpen] = useState(false);
	const [independentSchoolsModalOpen, setIndependentSchoolsModalOpen] = useState(false);

	return (
		<Card>
			<CardTitle>{t("report.schools.title")}</CardTitle>
			{state ? (
				<View style={{ marginTop: -2 }}>
					<SubTitle category="h6">{t("report.schools.state")}</SubTitle>
					<LabeledValue label={t("report.schools.nearest")} value={state.nearest.length} />
					{state.average_score ? (
						<LabeledValue label={t("report.schools.score")} value={state.average_score} />
					) : null}
					{state.average_score ? (
						<LabeledValue label={t("report.schools.rating")} value={state.rating} />
					) : null}
					<Row>
						<Button size="tiny" appearance="outline" onPress={() => setStateSchoolsModalOpen(true)}>
							<SubTitle>{t("report.schools.browseState")}</SubTitle>
						</Button>
					</Row>
					<SchoolsModal
						title={t("report.schools.stateSchools")}
						isOpen={stateSchoolsModalOpen}
						onClose={() => setStateSchoolsModalOpen(false)}
						schools={state.nearest}
					/>
				</View>
			) : null}
			{independent ? (
				<View style={{ marginTop: 16 }}>
					<SubTitle category="h6">{t("report.schools.independent")}</SubTitle>
					<LabeledValue label={t("report.schools.nearest")} value={independent.nearest.length} />
					{independent.average_score ? (
						<LabeledValue label={t("report.schools.score")} value={independent.average_score} />
					) : null}
					{independent.rating ? (
						<LabeledValue label={t("report.schools.rating")} value={independent.rating} />
					) : null}
					<Row>
						<Button
							size="tiny"
							appearance="outline"
							onPress={() => setIndependentSchoolsModalOpen(true)}
						>
							<SubTitle>{t("report.schools.browseIndependent")}</SubTitle>
						</Button>
					</Row>
					<SchoolsModal
						title={t("report.schools.independentSchools")}
						isOpen={independentSchoolsModalOpen}
						onClose={() => setIndependentSchoolsModalOpen(false)}
						schools={independent.nearest}
					/>
				</View>
			) : null}
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

const Label = styled(Text)`
	font-size: 14px;
	color: ${theme.colors.textSemiDark};
	font-family: ${theme.fonts.regular};
	margin-top: 6px;
`;

export default SchoolsCard;
