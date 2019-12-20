import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import LookupScreen from "../screens/LookupScreen";
import HistoryScreen from "../screens/HistoryScreen";
import { PaperTheme } from "../config";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Lookup: { screen: LookupScreen },
    History: { screen: HistoryScreen }
  },
  {
    initialRouteName: "Lookup",
    activeColor: PaperTheme.colors.primary,
    inactiveColor: PaperTheme.colors.text + "5A",
    barStyle: { backgroundColor: PaperTheme.colors.surface }
  }
);

export default createAppContainer(TabNavigator);
