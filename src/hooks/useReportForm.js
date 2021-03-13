import React, { createContext, useContext, useState } from "react";

const ReportFormContext = createContext();

export const ReportFormProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [includeCrimeData, setIncludeCrimeData] = useState(true);
	const [includeAirQualityData, setIncludeAirQualityData] = useState(true);
	const [includeAveragePrices, setIncludeAveragePrices] = useState(true);

	return (
		<ReportFormContext.Provider
			value={{
				location,
				setLocation,
				includeCrimeData,
				setIncludeCrimeData,
				includeAirQualityData,
				setIncludeAirQualityData,
				includeAveragePrices,
				setIncludeAveragePrices,
			}}
		>
			{children}
		</ReportFormContext.Provider>
	);
};

const useReportForm = () => {
	const context = useContext(ReportFormContext);
	return { ...context };
};

export default useReportForm;
