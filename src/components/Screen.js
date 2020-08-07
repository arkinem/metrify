import * as React from "react";
import Constants from "expo-constants";
import styled from "styled-components/native";
import Header from "./Header";
import Svg, { Path } from "react-native-svg";
import theme from "../constants/theme";

export default function Screen({ title, headerProps, children, noBackground, plainView }) {
	return (
		<Container>
			{title && <Header title={title} {...headerProps} />}
			{!noBackground && (
				<Svg
					preserveAspectRatio="xMinYMin slice"
					height="100px"
					width="100%"
					viewBox="0 0 1440 320"
				>
					<Path
						fill={theme.colors.primary}
						fill-opacity="1"
						d="M0,64L120,74.7C240,85,480,107,720,101.3C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
					/>
				</Svg>
			)}
			{plainView ? (
				<ContentView
					noBackground={noBackground}
					style={{ paddingHorizontal: 20, paddingVertical: 15 }}
				>
					{children}
				</ContentView>
			) : (
				<ContentScrollView
					noBackground={noBackground}
					contentContainerStyle={{
						paddingHorizontal: 20,
						paddingVertical: 15,
					}}
				>
					{children}
				</ContentScrollView>
			)}
		</Container>
	);
}

const Container = styled.SafeAreaView`
	margin-top: ${Constants.statusBarHeight}px;
	flex: 1;
`;

const ContentView = styled.View`
	flex: 1;
	margin-top: ${({ noBackground }) => (noBackground ? 0 : -60)}px;
	background-color: ${({ noBackground }) => (noBackground ? "#fff" : theme.colors.primary)};
`;

const ContentScrollView = styled.ScrollView`
	flex: 1;
	margin-top: ${({ noBackground }) => (noBackground ? 0 : -60)}px;
	background-color: ${({ noBackground }) => (noBackground ? "#fff" : theme.colors.primary)};
`;
