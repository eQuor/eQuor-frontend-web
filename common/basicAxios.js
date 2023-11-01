"use client"
import axios from "axios";
import config from "@configuration/config";

export async function axiosGet(endpoint, router, setIsAuth) {
  if (localStorage.getItem("authUser") === null) {
    console.log("aa");
    return;
  }
  const jwt_token = JSON.parse(localStorage.getItem("authUser")).jwtToken;
  const response = await axios.get(
    config.API_BASE_URL + config.API_VERSION + endpoint,
    {
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    }
  );
  if (response === null) {
    console.log("Request failed");
  } else if (response.status === 401) {
    setIsAuth(null);
    router.push("/auth/signin");
  }

  return response;
}

export async function axiosPost(endpoint, data, router, setAuthUser) {
  const jwt_token = JSON.parse(localStorage.getItem("authUser")).jwtToken;
  const response = await axios.post(
    config.API_BASE_URL + config.API_VERSION + endpoint,
    data,
    {
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    }
  );

  // if (response === null) {
  //   console.log("Request failed");
  // } else if (response.status === 401) {
  //   setIsAuth(null);
  //   router.push("/auth/signin");
  // }
  return response;
}
