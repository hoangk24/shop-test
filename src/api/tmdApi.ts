import axiosClient from "./axiosClient";

const tmdbApi = {
  getMoviePoplular: (params: { page: number }) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },
  getMovieNews: () => {
    const url = "/movie/latest";
    return axiosClient.get(url);
  },
  getTopRate: (params: { page: number }) => {
    const url = "/tv/top_rated";
    return axiosClient.get(url, { params });
  },
  getUpComming: (params: { page: number }) => {
    const url = "/movie/upcoming";
    return axiosClient.get(url, { params });
  },
};

export default tmdbApi;
