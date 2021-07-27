import React from "react";
import styled from "styled-components/native";
import { Text } from "@ui-kitten/components";

import theme from "../../constants/theme";

const CardTitle = ({ children, ...props }) => (
	<Title category="h5" {...props}>
		{children}
	</Title>
);

const Title = styled(Text)`
	font-family: ${theme.fonts.heading};
	margin-bottom: 10px;
`;

export default CardTitle;
