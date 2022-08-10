import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviePopular } from "api/movie";
import { GetMoviePopularParams } from "./movie";

export const getPopularAction = createAsyncThunk(
  "movie/getPopularAction",
  async (params: GetMoviePopularParams, { rejectWithValue }) => {
    try {
      const res = await getMoviePopular(params);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
