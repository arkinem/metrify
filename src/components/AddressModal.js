import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Close from "./CloseButton";
import Screen from "./Screen";
import { Input } from "@ui-kitten/components";
import useDebounce from "../hooks/useDebounce";

export default function AddressModal({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    async function fetchData() {
      setIsSearching(true);
      const results = await searchCharacters(debouncedSearchTerm);
      setResults(results);
      setIsSearching(false);
    }

    if (debouncedSearchTerm.length > 2) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Screen noBackground>
      <Heading>
        <Input
          size="large"
          placeholder="Type localization here"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <CloseButton onPress={() => navigation.goBack()} />
      </Heading>
    </Screen>
  );
}

const Heading = styled.View`
  flex-direction: row;
  height: 70px;
  width: 100%;
  align-items: center;
`;

const CloseButton = styled(Close)`
  margin-left: auto;
`;

// API search function
async function searchCharacters(search) {
  console.log("request", new Date());
  await sleep(300);
  return { text: "hehe" };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
