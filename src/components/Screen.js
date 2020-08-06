import * as React from "react";
import styled from "styled-components/native";
import Header from "./Header";
import Svg, { Path } from "react-native-svg";

export default function Screen({ title, headerProps, children }) {
  return (
    <>
      <Header title={title} {...headerProps} />
      <Svg
        preserveAspectRatio="xMinYMin slice"
        height="100px"
        width="100%"
        viewBox="0 0 1440 320"
      >
        <Path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L120,74.7C240,85,480,107,720,101.3C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </Svg>
      <Container
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
    </>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #0099ff;
`;
