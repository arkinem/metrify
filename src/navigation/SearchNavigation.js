import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/SearchScreen";
import SearchResultsScreen from "../screens/search/SearchResultsScreen";

const Stack = createStackNavigator();

export default function SearchNavigation() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Results" component={SearchResultsScreen} />
    </Stack.Navigator>
  );
}
