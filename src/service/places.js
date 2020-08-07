import axios from "axios";
import getEnvVariables from "../../environment";

const baseUrl = "https://maps.googleapis.com/maps/api/place";
const { googleApiKey } = getEnvVariables();

export const getPlacesAutoComplete = async (input) => {
  const url = `${baseUrl}/autocomplete/json`;

  try {
    const { data } = await axios.get(url, {
      params: {
        key: googleApiKey,
        input,
      },
    });

    return data?.predictions || [];
  } catch (error) {
    console.log(error);
  }
};
