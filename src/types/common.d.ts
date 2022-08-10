export type PaginationRequest = {
  page: number;
};
export interface PaginationResponse<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}
