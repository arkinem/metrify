import axios from "axios";

const baseUrl = "https://metrify-service.herokuapp.com/api";

export const getReport = async (
	lat,
	lng,
	locationDescription,
	crimeData = true,
	airQualityData = true,
	averagePrices = true
) => {
	const url = `${baseUrl}/v1/report`;

	try {
		console.log(url, {
			lat,
			lng,
			locationDescription,
			crimeData,
			airQualityData,
			averagePrices,
		});
		const { data } = await axios.get(url, {
			params: {
				lat,
				lng,
				locationDescription,
				crimeData,
				airQualityData,
				averagePrices,
			},
		});
		return data;
	} catch (error) {
		console.log(error.request);
	}
};
