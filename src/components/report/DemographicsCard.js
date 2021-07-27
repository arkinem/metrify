import React from "react";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import styled from "styled-components/native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryPie } from "victory-native";
import theme from "../../constants/theme";

import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";

const DemographicsCard = ({ demographics }) => {
	if (!demographics?.data) {
		return null;
	}

	const window = useWindowDimensions();
	const { age, proportion_with_degree, vehicles_per_household, commute_method, politics } =
		demographics.data;

	const ageData = [];
	const ageData2 = [];

	const colors = [
		"#003f5c",
		"#2f4b7c",
		"#665191",
		"#a05195",
		"#d45087",
		"#f95d6a",
		"#ff7c43",
		"#ffa600",
		"#d40000",
		"#ff4c58",
		"#f19a8a",
	];

	for (let i = 0; i < Object.keys(age).length; i += 2) {
		const firstElementKey = Object.keys(age)[i];
		const secondElementKey = Object.keys(age)[i + 1];
		const first = parseFloat(age[firstElementKey]);
		const second = parseFloat(age[secondElementKey]);

		const startRange = firstElementKey.split("-")[0];
		const endRange = secondElementKey.split("-")[1];

		ageData.push({
			x: `${startRange} - ${endRange}`,
			y: first + second,
			color: colors[i / 2] || "green",
		});
	}

	const commuteData = Object.keys(commute_method).map((method, index) => ({
		x: t(`report.demographics.commute.${method}`) || method,
		y: parseFloat(commute_method[method]),
		color: colors[index] || "green",
	}));

	const politicsData = Object.keys(politics.results).map((party) => ({
		label: party,
		result: parseFloat(politics.results[party].slice(0, -1)),
	}));

	const chartWidth = window.width - 75;

	return (
		<Card>
			<CardTitle>{t("report.demographics.title")}</CardTitle>
			<LabeledValue label={t("report.demographics.age")} />
			<VictoryPie
				width={chartWidth}
				height={chartWidth}
				data={ageData}
				colorScale={colors}
				padding={{ bottom: 30, top: 20, left: 40, right: 40 }}
				style={{ labels: { display: "none" } }}
			/>
			<LegendContainer>
				{ageData.map(({ x, color }, key) => (
					<LegendLabel key={key}>
						<LegendColorCircle color={color} />
						<LegendText>{x}</LegendText>
					</LegendLabel>
				))}
			</LegendContainer>
			<LabeledValue
				type="precentage"
				label={t("report.demographics.degree")}
				value={proportion_with_degree}
			/>
			<LabeledValue label={t("report.demographics.vehicles")} value={vehicles_per_household} />
			<LabeledValue label={t("report.demographics.commute")} />
			<VictoryPie
				width={chartWidth}
				height={chartWidth}
				data={commuteData}
				colorScale={colors}
				padding={{ bottom: 30, top: 20, left: 40, right: 40 }}
				style={{ labels: { display: "none" } }}
				innerRadius={60}
			/>
			<LegendContainer>
				{commuteData.map(({ x, color }, key) => (
					<LegendLabel key={key}>
						<LegendColorCircle color={color} />
						<LegendText>{x}</LegendText>
					</LegendLabel>
				))}
			</LegendContainer>
			<LabeledValue label={t("report.demographics.politics")} />

			<VictoryChart width={chartWidth}>
				<VictoryBar
					animate={{
						duration: 2000,
						onLoad: { duration: 1000 },
					}}
					cornerRadius={{ top: 4, bottom: 4 }}
					style={{
						data: {
							fill: theme.colors.primary,
						},
						labels: {
							display: "none",
						},
					}}
					barRatio={0.8}
					data={politicsData}
					x="label"
					y="result"
					domainPadding={{ x: [30, 0] }}
				/>
				<VictoryAxis
					dependentAxis={true}
					style={{
						axis: { stroke: "#f95d6a", strokeWidth: 3 },
					}}
					tickFormat={(x) => `${x}%`}
				/>
				<VictoryAxis
					style={{
						tickLabels: { angle: 25, fontSize: 12 },
						axis: { stroke: "#f95d6a", strokeWidth: 3 },
					}}
					tickLabelComponent={<VictoryLabel dy={10} />}
				/>
			</VictoryChart>
		</Card>
	);
};

const LegendContainer = styled.View`
	padding: 10px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: -20px;
	margin-bottom: 18px;
`;

const LegendLabel = styled.View`
	flex-direction: row;
	align-items: center;
	margin-right: 12px;
`;

const LegendColorCircle = styled.View`
	width: 10px;
	height: 10px;
	border-radius: 10px;
	margin-right: 4px;
	background-color: ${({ color = "green" }) => color};
`;

const LegendText = styled.Text``;

export default DemographicsCard;
