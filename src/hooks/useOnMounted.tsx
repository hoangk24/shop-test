import { useEffect } from "react";

export default function useOnMounted(fn: () => void) {
  useEffect(() => {
    fn();
  }, []);
}
