/* eslint-disable no-unused-vars */
import { AxiosResponse } from "axios";
import {
  GetMoviePopularParams,
  GetMoviePopularResponse,
} from "features/example/movie/movie";
import axiosClient from "./axiosClient";
import { API_ENDPOINTS } from "./endPoint";

type GetMoviePopular = (
  params: GetMoviePopularParams
) => Promise<AxiosResponse<GetMoviePopularResponse>>;

type GetMovieUpComing = (params: any) => Promise<AxiosResponse<any>>;

export const getMoviePopular: GetMoviePopular = (params) =>
  axiosClient.get(API_ENDPOINTS.MOVIES.POPULAR, { params });

export const getMovieNews = () => axiosClient.get(API_ENDPOINTS.MOVIES.LATEST);

export const getUpComing: GetMovieUpComing = (params) =>
  axiosClient.get(API_ENDPOINTS.MOVIES.UP_COMING, { params });
