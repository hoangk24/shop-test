import axios from "axios";
import { config } from "configs";
import { stringify } from "query-string";

const axiosClient = axios.create({
  baseURL: config.API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer(params) {
    return stringify({ ...params, api_key: config.API_KEY });
  },
});

axiosClient.interceptors.request.use((cf) => ({
  ...cf,
  url: `${cf.url}?api_key=${config.API_KEY}`,
}));

axiosClient.interceptors.response.use(
  (res) => res.data || res,
  (err) => Promise.reject(err)
);

export default axiosClient;
