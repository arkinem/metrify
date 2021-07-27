import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import theme from "../../constants/theme";

const Card = ({ children, ...props }) => (
	<Container style={theme.shadow} {...props}>
		{children}
	</Container>
);

const Container = styled.View`
	width: 100%;
	padding: 16px;
	background-color: #fff;
	/* border: 4px solid ${theme.colors.textSemiDark}; */
	border-radius: 20px;
	margin-bottom: 20px;
`;

export default Card;
