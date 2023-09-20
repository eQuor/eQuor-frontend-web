import axios from "axios";
import config from "@configuration/config";
import { useRouter } from "next/router";

export async function axiosGet(endpoint, requestInfo) {
  const jwt_token = localStorage.getItem("jwt_token");
  const response = await axios.get(
    config.API_BASE_URL + config.API_VERSION + endpoint,
    {
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    }
  );
  return response;
}

export async function axiosPost(endpoint, data) {
  const response = await axios.post(
    config.API_BASE_URL + config.API_VERSION + endpoint,
    data
  );
  return response;
}
