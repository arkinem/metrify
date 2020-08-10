import React, { createContext, useContext, useState, useEffect } from "react";
import { storeData, getData } from "../lib/asyncStorage";

const PreferencesContext = createContext();
export const preferencesStorageKey = "preferences";

export const PreferencesProvider = ({ children }) => {
	const [preferences, setPreferencesState] = useState({
		crimeData: true,
		airQuality: true,
		averagePrices: true,
	});

	useEffect(() => {
		async function loadCache() {
			const preferences = await getData(preferencesStorageKey);
			setPreferencesState(preferences);
			console.log("From cache:", preferences);
		}

		loadCache();
	}, []);

	const setPreferences = (preferences) => {
		storeData(preferencesStorageKey, preferences);
		setPreferencesState(preferences);
	};

	const setCrimeDataPreference = (choice) => setPreferences({ ...preferences, crimeData: choice });
	const setAirQualityPreference = (choice) =>
		setPreferences({ ...preferences, airQuality: choice });
	const setAveragePricesPreference = (choice) =>
		setPreferences({ ...preferences, averagePrices: choice });

	return (
		<PreferencesContext.Provider
			value={{
				setCrimeDataPreference,
				setAirQualityPreference,
				setAveragePricesPreference,
				crimeDataPreference: preferences?.crimeData,
				airQualityPreference: preferences?.airQuality,
				averagePricesPreference: preferences?.averagePrices,
			}}
		>
			{children}
		</PreferencesContext.Provider>
	);
};

const usePreferences = () => {
	const context = useContext(PreferencesContext);
	return { ...context };
};

export default usePreferences;
