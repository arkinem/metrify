import axios from "axios";
import getEnvVariables from "../../environment";

const baseUrl = "https://maps.googleapis.com/maps/api";
const { googleApiKey } = getEnvVariables();

const isUkLocation = (location) => {
	return location?.structured_formatting?.secondary_text?.slice(-2) === "UK";
};

export const getPlacesAutoComplete = async (input) => {
	const url = `${baseUrl}/place/autocomplete/json`;

	try {
		const { data } = await axios.get(url, {
			params: {
				key: googleApiKey,
				input,
			},
		});

		return data?.predictions.filter((location) => isUkLocation(location)) || [];
	} catch (error) {
		console.log(error);
	}
};
