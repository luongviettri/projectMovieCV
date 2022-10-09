import axios from "axios";
import { baseURL, TokenCybersoft, Authorization } from "../Settings/config";
import queryString from "query-string";

const AxiosClient = axios.create({
  baseURL,
  // timeout: 3000,
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    TokenCybersoft,
    Authorization
  },
  paramsSerializer: params => queryString.stringify(params)
});

AxiosClient.interceptors.request.use(config => {
  // StartLoading(config.headers);
  return config;
});

AxiosClient.interceptors.response.use(
  async response => {
    // EndLoading(response.config.headers);
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // EndLoading(error.config.headers);
    // eslint-disable-next-line no-undef
    return Promise.reject(error);
  }
);

export default AxiosClient;
