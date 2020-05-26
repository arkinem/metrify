import React from "react";
import styled from "styled-components/native";
import StatusBar from "./StatusBar";
import { withTheme } from "react-native-paper";

class ScreenContainer extends React.Component {
  // shouldComponentUpdate = () => false;

  render() {
    const { theme, children } = this.props;
   

    return (
      <>
       
        <Container>{children}</Container>
      </>
    );
  }
}

export default withTheme(ScreenContainer);
