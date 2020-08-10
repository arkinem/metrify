import React, { createContext, useContext, useState, useEffect } from "react";
import { storeData, getData } from "../lib/asyncStorage";

const ReportsContext = createContext();
export const reportsStorageKey = "reports";

export const ReportsProvider = ({ children }) => {
	const [reports, setReportsState] = useState([]);
	const [reportsLoading, setReportsLoading] = useState(false);

	useEffect(() => {
		async function loadCache() {
			const reports = await getData(reportsStorageKey);
			setReportsState(reports);
		}

		loadCache();
	}, []);

	const setReports = (reports) => {
		storeData(reportsStorageKey, reports);
		setReportsState(reports);
	};

	return (
		<ReportsContext.Provider value={{ reports, setReports, reportsLoading, setReportsLoading }}>
			{children}
		</ReportsContext.Provider>
	);
};

const useReports = () => {
	const context = useContext(ReportsContext);
	return { ...context };
};

export default useReports;
