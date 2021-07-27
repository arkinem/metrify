import React, { createContext, useContext, useState, useEffect } from "react";
import { storeData, getData, removeData } from "../lib/asyncStorage";

const ReportsContext = createContext();
export const reportsStorageKey = "reports";

export const ReportsProvider = ({ children }) => {
	const [reports, setReportsState] = useState([]);
	const [reportsLoading, setReportsLoading] = useState(false);

	useEffect(() => {
		async function loadCache() {
			const reports = await getData(reportsStorageKey);

			if (reports) {
				setReportsState(reports);
			}
		}

		loadCache();
	}, []);

	// const setReports = (reports) => {
	// 	storeData(reportsStorageKey, reports);
	// 	setReportsState(reports);
	// };

	const saveReport = async (report) => {
		const reportsToSave = [...(reports || []), report];
		setReportsState(reportsToSave);
		await storeData(reportsStorageKey, reportsToSave);
	};

	const removeAllReports = async () => {
		await removeData(reportsStorageKey);
		setReportsState([]);
	};

	return (
		<ReportsContext.Provider
			value={{ reports, saveReport, removeAllReports, reportsLoading, setReportsLoading }}
		>
			{children}
		</ReportsContext.Provider>
	);
};

const useReports = () => {
	const context = useContext(ReportsContext);
	return { ...context };
};

export default useReports;
