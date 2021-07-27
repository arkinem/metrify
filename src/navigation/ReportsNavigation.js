import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../constants/navigation";
import ReportsScreen from "../screens/reports/ReportsScreen";
import ReportScreen from "../screens//reports/ReportScreen";

const ReportsStack = createStackNavigator();

const ReportsNavigation = () => {
	const { Navigator, Screen } = ReportsStack;

	return (
		<Navigator
			initialRouteName={screens.REPORTS}
			screenOptions={{ headerShown: false }}
			mode="modal"
		>
			<Screen name={screens.REPORTS} component={ReportsScreen} />
			<Screen name={screens.REPORT} component={ReportScreen} />
		</Navigator>
	);
};

export default ReportsNavigation;
