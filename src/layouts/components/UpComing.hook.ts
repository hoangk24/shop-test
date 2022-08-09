import tmdbApi from "api/tmdApi";
import { useEffect, useState } from "react";

export default function useUpComing() {
  const [items, setItems] = useState([]);

  const load = async () => {
    await tmdbApi.getUpComming({ page: 1 }).then((res: any) => {
      setItems(res.results);
    });
  };

  useEffect(() => {
    load();
  }, []);

  return { items };
}
