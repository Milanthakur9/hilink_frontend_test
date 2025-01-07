import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = "http://localhost:3333";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config);

    config.headers.Authorization =
      "Bearer " + localStorage.getItem("authToken");

    return config;
  },
  (error) => {
    console.log("Request Error:", error);
    return Promise.reject(error);
  }
);
