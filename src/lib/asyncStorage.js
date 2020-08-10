import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (storageKey, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(storageKey, jsonValue);
	} catch (e) {
		console.log("storeData error", e);
	}
};

export const getData = async (storageKey) => {
	try {
		const jsonValue = await AsyncStorage.getItem(storageKey);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		console.log("getData error", e);
	}
};
