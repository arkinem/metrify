import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReportsScreen from "../screens/ReportsScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import SearchNavigation from "./SearchNavigation";
import DrawerContent from "../components/Drawer";

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Search" drawerContent={DrawerContent}>
				<Drawer.Screen name="Search" component={SearchNavigation} />
				<Drawer.Screen name="Reports" component={ReportsScreen} />
				<Drawer.Screen name="Preferences" component={PreferencesScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
