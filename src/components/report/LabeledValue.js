import React from "react";
import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

import theme from "../../constants/theme";

const LabeledValue = ({ label, value, type }) => {
	return (
		<Row>
			<Label category="s1">{label}</Label>
			<Value>
				{value}
				{type === "currency" ? " £" : type === "precentage" ? "%" : null}
			</Value>
		</Row>
	);
};

const Label = styled(Text)`
	font-size: 16px;
	color: ${theme.colors.textDark};
	font-family: ${theme.fonts.regular};
`;

const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

const Value = styled(Text)`
	font-size: 16px;
	color: ${theme.colors.primary};
	font-family: ${theme.fonts.subheading};
`;

export default LabeledValue;
