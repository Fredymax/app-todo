import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoader(true);
    setTimeout(() => {
      try {
        let data = localStorage[key];
        if (data) {
          setItem(JSON.parse(localStorage[key]));
        } else {
          localStorage[key] = JSON.stringify(initialValue);
          setItem(initialValue);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }, 3000);
  }, [key]);

  const storeItem = (newValue) => {
    setItem(newValue);
    localStorage[key] = JSON.stringify(newValue);
  };

  return {
    storeItem,
    item,
    loader,
    error,
  };
}
