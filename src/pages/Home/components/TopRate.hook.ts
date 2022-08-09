import tmdbApi from "api/tmdApi";
import { useEffect, useState } from "react";

export default function useTopRate() {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const load = async () => {
    setIsLoading(true);
    await tmdbApi
      .getTopRate({ page })
      .then((res: any) => {
        setItems([...items, ...res.results]);
      })
      .finally(() => setIsLoading(false));
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

  return { isLoading, handleBack, handleNext, items };
}
