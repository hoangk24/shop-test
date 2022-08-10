import { unwrapResult } from "@reduxjs/toolkit";
import { GetMoviePopularResponse } from "features/example/movie/movie";
import { getPopularAction } from "features/example/movie/movie.thunk";
import { useAppDispatch } from "hooks/useDispatch";
import { useEffect, useState } from "react";

export default function usePopular() {
  const [data, setData] = useState<GetMoviePopularResponse | undefined>(
    undefined
  );
  const [loading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const load = async () => {
    setIsLoading(true);
    dispatch(getPopularAction({ page }))
      .then(unwrapResult)
      .then((res: any) => {
        setData(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBack = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    load();
  }, [page]);

  return { handleBack, handleNext, loading, data: data?.results };
}
