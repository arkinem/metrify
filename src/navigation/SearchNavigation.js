import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/SearchScreen";
import SearchResultsScreen from "../screens/search/SearchResultsScreen";
import AddressModal from "../components/AddressModal";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <RootStack.Screen name="Main" component={SearchNavigation} />
      <RootStack.Screen name="AddressModal" component={AddressModal} />
    </RootStack.Navigator>
  );
}

function SearchNavigation() {
  return (
    <MainStack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Results" component={SearchResultsScreen} />
    </MainStack.Navigator>
  );
}
