import axios from "axios";

//const baseUrl = "http://localhost:3000/api";
const baseUrl = "https://metrify-service-pl6qg.ondigitalocean.app/api";

const defaultOptions = {
	airQuality: true,
	crimeData: true,
	councilTax: true,
	demographics: true,
	schools: true,
	pricesPerSqf: true,
	soldPricesPerSqf: true,
	restaurants: true,
};

export const getReport = async (lat, lng, postcode, options = defaultOptions) => {
	const url = `${baseUrl}/v1/report`;

	try {
		const { data } = await axios.get(url, {
			params: {
				lat,
				lng,
				postcode,
				...defaultOptions,
				...options,
			},
		});
		return data;
	} catch (error) {
		console.log(JSON.stringify(error));
	}
};
