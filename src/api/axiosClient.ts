import axios from "axios";
import config from "configs";
import { stringify } from "query-string";

const axiosClient = axios.create({
  baseURL: config.API_ENPOINT,
  headers: {},
  paramsSerializer(params) {
    return stringify(params);
  },
});

axiosClient.interceptors.response.use(
  (res) => res.data || res,
  (err) => Promise.reject(err)
);
