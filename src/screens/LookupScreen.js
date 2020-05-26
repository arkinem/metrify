import React from "react";
import styled from "styled-components/native";
import ScreenContainer from "../components/ScreenContainer";
import HeaderLabel from "../components/HeaderLabel";
import strings from "../localization/strings";
import SearchInput from "../components/SearchInput";
import StatusBar from "../components/StatusBar";
import { PaperTheme } from "../config";
import Geocoder from "react-native-geocoding";

Geocoder.init("key");

class LookupScreen extends React.Component {
  state = {
    address: "Sąd rejonowy chorzów",
    results: []
  };

  onSubmit = async () => {
    try {
      const response = await Geocoder.from(this.state.address);
      const { formatted_address: formatted, geometry } = response.results[0];

      // this.setState({ address: formatted });
      if (response.results.length > 0) {
        this.setState({ results: response.results });
      }
      // console.log(geometry.location, response);
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const { address, results } = this.state;
    console.log(results);
    return (
      <Container>
        <StatusBar />
        <HeaderLabel>{strings.Type_an_address}</HeaderLabel>
        <SearchInput
          value={address}
          onChange={address => this.setState({ address })}
          onSubmitEditing={this.onSubmit}
        />
        {results.map(r => (
          <ResultContainer>
            <ResultText>{r.formatted_address}</ResultText>
          </ResultContainer>
        ))}
      </Container>
    );
  }
}

export default LookupScreen;

const Container = styled.View`
  flex: 1;
  background: ${PaperTheme.colors.background};
  padding: 0 16px;
`;

const ResultContainer = styled.View`
  width: 100%;
  padding: 20px 0;
  margin-top: 12px;
  border-radius: 5px;
  background: ${PaperTheme.colors.surface};
`;

const ResultText = styled.Text`
  color: ${PaperTheme.colors.text};
`;
