import React from "react";

import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";

const AirQualityCard = ({ airQuality }) => {
	if (!airQuality?.data) {
		return null;
	}

	const { weather, pollution } = airQuality.data.current;

	const aqi = parseInt(pollution.aqius);
	let polutionLevel = "";

	switch (true) {
		case aqi < 51:
			polutionLevel = t("report.airQuality.pollution.good");
			break;
		case aqi < 101:
			polutionLevel = t("report.airQuality.pollution.moderate");
			break;
		case aqi < 151:
			polutionLevel = t("report.airQuality.pollution.notForSensitive");
			break;
		case aqi < 201:
			polutionLevel = t("report.airQuality.pollution.unhealthy");
			break;
		case aqi < 301:
			polutionLevel = t("report.airQuality.pollution.veryUnhealthy");
			break;
		case aqi < 501:
			polutionLevel = t("report.airQuality.pollution.hazardous");
			break;
		default:
			polutionLevel = t("report.airQuality.pollution.unknown");
			break;
	}

	return (
		<Card>
			<CardTitle>{t("report.airQuality.title")}</CardTitle>
			<LabeledValue label={t("report.airQuality.temperature")} value={`${weather.tp} °C`} />
			<LabeledValue label={t("report.airQuality.humidity")} value={`${weather.hu}%`} />
			<LabeledValue label={t("report.airQuality.wind")} value={`${weather.ws} m/s`} />
			<LabeledValue label={t("report.airQuality.polutionLevel")} value={polutionLevel} />
			<LabeledValue label={t("report.airQuality.quality")} value={`${aqi} US AQI`} />
			<LabeledValue
				label={t("report.airQuality.mainPollutant")}
				value={(pollution.mainus || "").toUpperCase()}
			/>
		</Card>
	);
};

export default AirQualityCard;
