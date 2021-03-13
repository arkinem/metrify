import React from "react";
import styled from "styled-components/native";
import { Text } from "@ui-kitten/components";
import theme from "../constants/theme";

export default function TextHeading({ noMargin, children }) {
	return (
		<Heading category="h4" noMargin={noMargin}>
			{children}
		</Heading>
	);
}

const Heading = styled(Text)`
	margin-bottom: ${({ noMargin }) => (noMargin ? 0 : 10)}px;
	color: ${theme.colors.textLight};
	font-family: ${theme.fonts.heading};
`;
