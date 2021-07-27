import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReportsScreen from "../screens/ReportsScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import SearchNavigation from "./SearchNavigation";
import DrawerContent from "../components/Drawer";
import { screens } from "../constants/navigation";

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
	const { Navigator, Screen } = Drawer;
	return (
		<NavigationContainer>
			<Navigator initialRouteName={screens.SEARCH_NAVIGATION} drawerContent={DrawerContent}>
				<Screen name={screens.SEARCH_NAVIGATION} component={SearchNavigation} />
				<Screen name={screens.REPORTS} component={ReportsScreen} />
				<Screen name={screens.PREFERENCES} component={PreferencesScreen} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;
