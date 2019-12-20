import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import MainScreen from "../screens/MainScreen";
import OtherScreen from "../screens/OtherScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Main: { screen: MainScreen },
    Other: { screen: OtherScreen }
  },
  {
    initialRouteName: "Other",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

export default createAppContainer(TabNavigator);
