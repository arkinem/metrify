import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/SearchScreen";
import SearchLoadingScreen from "../screens/search/SearchLoadingScreen";
import SearchResultsScreen from "../screens/search/SearchResultsScreen";
import AddressModal from "../components/AddressModal";
import { screens } from "../constants/navigation";

const SearchStack = createStackNavigator();
const ResultStack = createStackNavigator();

const SearchNavigation = () => {
	const { Navigator, Screen } = SearchStack;

	return (
		<Navigator screenOptions={{ headerShown: false }} mode="modal">
			<Screen name={screens.SEARCH} component={SearchScreen} />
			<Screen name={screens.SEARCH_RESULT_NAVIGATION} component={ResultNavigation} />
			<Screen name={screens.ADDRESS_MODAL} component={AddressModal} />
		</Navigator>
	);
};

const ResultNavigation = () => {
	const { Navigator, Screen } = ResultStack;

	return (
		<Navigator initialRouteName={screens.SEARCH_LOADING} screenOptions={{ headerShown: false }}>
			<Screen name={screens.SEARCH_LOADING} component={SearchLoadingScreen} />
			<Screen name={screens.SEARCH_RESULTS} component={SearchResultsScreen} />
		</Navigator>
	);
};

export default SearchNavigation;
