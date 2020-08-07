import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Screen from "./Screen";
import { Input, Divider, List, ListItem, Text } from "@ui-kitten/components";
import useDebounce from "../hooks/useDebounce";
import { getPlacesAutoComplete } from "../service/places";
import { AntDesign } from "@expo/vector-icons";
import { t } from "../i18n/helpers";
import useLocation from "../hooks/useLocation";

export default function AddressModal({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const { setLocation, location } = useLocation();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    async function fetchData() {
      setIsSearching(true);
      const results = await getPlacesAutoComplete(debouncedSearchTerm);
      setResults(results);
      setIsSearching(false);
    }

    if (debouncedSearchTerm.length > 2) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const renderItem = ({ item }) => {
    const { structured_formatting: location } = item;

    return (
      <ListItem
        title={location?.main_text}
        description={location?.secondary_text}
        onPress={() => {
          setLocation(item);
          navigation.goBack();
        }}
      />
    );
  };

  return (
    <Screen plainView noBackground>
      <Heading>
        <BackButton onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </BackButton>
        <Title category="h4">{t("addressModal.inputTitle")}</Title>
        <Input
          autoFocus
          size="large"
          placeholder={t("addressModal.inputPlaceholder")}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </Heading>
      <ResultsList
        data={results}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const Heading = styled.View`
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

const ResultsList = styled(List)`
  background: white;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;
