import * as React from "react";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider } from "@ui-kitten/components";
import AppNavigation from "./src/navigation/AppNavigation";
import { default as theme } from "./src/constants/theme.json";
import { LocationProvider } from "./src/hooks/useLocation";
import { AppLoading } from "expo";
import { appFonts } from "./src/constants/fonts";
import { useFonts } from "expo-font";

export default function App() {
	let [fontsLoaded] = useFonts(appFonts);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<LocationProvider>
				<AppNavigation />
				<StatusBar style="auto" />
			</LocationProvider>
		</ApplicationProvider>
	);
}
