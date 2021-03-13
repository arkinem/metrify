import axios from "axios";
import getEnvVariables from "../../environment";

const baseUrl = "https://maps.googleapis.com/maps/api";
const { googleApiKey } = getEnvVariables();

export const addressToCoords = async (address) => {
	const url = `${baseUrl}/geocode/json`;

	try {
		const { data } = await axios.get(url, {
			params: {
				key: googleApiKey,
				address,
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
