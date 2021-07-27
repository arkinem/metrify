import React from "react";
import styled from "styled-components/native";
import { Text } from "@ui-kitten/components";

import { t } from "../../lib/i18n/helpers";
import Card from "./Card";
import CardTitle from "./CardTitle";
import LabeledValue from "./LabeledValue";
import theme from "../../constants/theme";

const CouncilTaxCard = ({ councilTax }) => {
	const { council, council_rating, year, annual_change, note } = councilTax;
	const bands = councilTax.council_tax;

	return (
		<Card>
			<CardTitle>{t("report.councilTax.title")}</CardTitle>
			<LabeledValue label={t("report.councilTax.council")} value={council} />
			<LabeledValue label={t("report.councilTax.rating")} value={council_rating} />
			<LabeledValue label={t("report.councilTax.year")} value={year} />
			<LabeledValue label={t("report.councilTax.change")} value={annual_change} />
			<LabeledValue label={t("report.councilTax.bands")} />

			{bands?.band_a && bands?.band_h ? (
				<TableContainer>
					<TableCell borderBottom borderRight>
						<CellHeading>A</CellHeading>
						<CellValue>{bands.band_a} £</CellValue>
					</TableCell>
					<TableCell borderBottom borderRight>
						<CellHeading>B</CellHeading>
						<CellValue>{bands.band_b} £</CellValue>
					</TableCell>
					<TableCell borderBottom borderRight>
						<CellHeading>C</CellHeading>
						<CellValue>{bands.band_c} £</CellValue>
					</TableCell>
					<TableCell borderBottom>
						<CellHeading>D</CellHeading>
						<CellValue>{bands.band_d} £</CellValue>
					</TableCell>
					<TableCell borderRight>
						<CellHeading>E</CellHeading>
						<CellValue>{bands.band_e} £</CellValue>
					</TableCell>
					<TableCell borderRight>
						<CellHeading>F</CellHeading>
						<CellValue>{bands.band_f} £</CellValue>
					</TableCell>
					<TableCell borderRight>
						<CellHeading>G</CellHeading>
						<CellValue>{bands.band_g} £</CellValue>
					</TableCell>
					<TableCell>
						<CellHeading>H</CellHeading>
						<CellValue>{bands.band_h} £</CellValue>
					</TableCell>
				</TableContainer>
			) : null}
			{note ? <Label>{note}</Label> : null}
		</Card>
	);
};

const Label = styled(Text)`
	font-size: 14px;
	color: ${theme.colors.textSemiDark};
	font-family: ${theme.fonts.regular};
	margin-top: 6px;
`;

const TableContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	border: 3px solid ${theme.colors.primary};
	margin-top: 16px;
	margin-bottom: 8px;
	border-radius: 16px;
`;

const TableCell = styled.View`
	width: 25%;
	height: 60px;
	border: 0px solid ${theme.colors.primary};
	border-right-width: ${({ borderRight }) => (borderRight ? 3 : 0)}px;
	border-bottom-width: ${({ borderBottom }) => (borderBottom ? 3 : 0)}px;
	align-items: center;
`;

const CellHeading = styled(Text)`
	font-size: 18px;
	color: ${theme.colors.primaryLight};
	font-family: ${theme.fonts.subheading};
	padding-top: 2px;
`;

const CellValue = styled(Text)`
	margin-top: -6px;
	font-size: 14px;
	color: ${theme.colors.textSemiDark};
	font-family: ${theme.fonts.regular};
`;

export default CouncilTaxCard;
