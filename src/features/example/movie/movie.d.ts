import { PaginationResponse, PaginationRequest, Movie } from "types";

export type GetMoviePopularParams = PaginationRequest;
export type GetMoviePopularResponse = PaginationResponse<Movie>;
