import React from "react";

import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";

const CrimesCard = ({ crimeData }) => {
	return (
		<Card>
			<CardTitle>{t("report.crimes.title")}</CardTitle>
			{Object.keys(crimeData).map((key, index) => {
				const label = t(`report.crimes.type.${key}`) || `${key}:`;

				return <LabeledValue key={index} label={label} value={crimeData[key]} />;
			})}
		</Card>
	);
};

export default CrimesCard;
