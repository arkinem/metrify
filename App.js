import * as React from "react";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

import AppNavigation from "./src/navigation/AppNavigation";
import { default as theme } from "./src/constants/theme.json";
import { ReportFormProvider } from "./src/hooks/useReportForm";
import { appFonts } from "./src/constants/fonts";
import { PreferencesProvider } from "./src/hooks/usePreferences";
import { ReportsProvider } from "./src/hooks/useReports";

export default function App() {
	let [fontsLoaded] = useFonts(appFonts);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<PreferencesProvider>
				<ReportFormProvider>
					<ReportsProvider>
						<AppNavigation />
						<StatusBar style="auto" />
					</ReportsProvider>
				</ReportFormProvider>
			</PreferencesProvider>
		</ApplicationProvider>
	);
}
