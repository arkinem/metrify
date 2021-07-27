import axios from "axios";

const baseUrl = "https://api.postcodes.io";

export const findPostcode = async (lat, lng) => {
	const url = `${baseUrl}/postcodes`;

	try {
		const { data } = await axios.get(url, {
			params: {
				lat: lat,
				lon: lng,
			},
		});

		return data.result[0]?.postcode;
	} catch (error) {
		console.log(error);
	}
};
