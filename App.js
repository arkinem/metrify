import * as React from "react";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { ApplicationProvider } from "@ui-kitten/components";
import AppNavigation from "./src/navigation/AppNavigation";
import { default as theme } from "./src/constants/theme.json";
import { ReportFormProvider } from "./src/hooks/useReportForm";
import AppLoading from "expo-app-loading";
import { appFonts } from "./src/constants/fonts";
import { useFonts } from "expo-font";
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
