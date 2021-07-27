import React from "react";
import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import theme from "../../constants/theme";
import { t } from "../../lib/i18n/helpers";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";
import Card from "./Card";

const PriceCard = ({ pricesPerSqf }) => {
	if (!pricesPerSqf?.data) {
		return null;
	}

	const { data } = pricesPerSqf;

	const { points_analysed, radius, average } = data;

	return (
		<Card>
			<CardTitle>{t("report.pricePerSqf.title")}</CardTitle>
			<LabeledValue type="currency" label={t("report.pricePerSqf.avgPrice")} value={average} />
			<LabeledValue
				type="currency"
				label={t("report.pricePerSqf.70")}
				value={`${data["70pc_range"][0]} - ${data["70pc_range"][1]}`}
			/>
			<LabeledValue
				type="currency"
				label={t("report.pricePerSqf.80")}
				value={`${data["80pc_range"][0]} - ${data["80pc_range"][1]}`}
			/>
			<LabeledValue
				type="currency"
				label={t("report.pricePerSqf.90")}
				value={`${data["90pc_range"][0]} - ${data["90pc_range"][1]}`}
			/>
			<LabeledValue
				type="currency"
				label={t("report.pricePerSqf.100")}
				value={`${data["100pc_range"][0]} - ${data["100pc_range"][1]}`}
			/>
			<Label>
				{t("report.basedOn")} {points_analysed}
			</Label>
		</Card>
	);
};

const Label = styled(Text)`
	font-size: 14px;
	color: ${theme.colors.textSemiDark};
	font-family: ${theme.fonts.regular};
	text-align: right;
	margin-top: 6px;
`;

export default PriceCard;
