import tmdbApi from "api/tmdApi";
import { useEffect, useState } from "react";

export default function usePopular() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const load = async () => {
    await tmdbApi.getMoviePoplular({ page }).then((res: any) => {
      setItems(res.results);
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

  return { handleBack, handleNext, items };
}
