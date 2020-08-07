import axios from "axios";
import getEnvVariables from "../../environment";

const baseUrl = "https://maps.googleapis.com/maps/api/place";
const { googleApiKey } = getEnvVariables();

export const getPlacesAutoComplete = async (input) => {
  const url = `${baseUrl}/autocomplete/json`;

  try {
    console.log(url);
    const { data } = await axios.get(url, {
      params: {
        key: googleApiKey,
        input,
      },
    });
    console.log(data, url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
