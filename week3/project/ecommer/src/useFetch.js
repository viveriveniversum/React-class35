import { useState } from "react";

const useFetch = (url, received) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const implementFetch = () => {
    setError(false);

    const invokeFetch = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        console.error(res);
        setError(true);
      }

      const jsonResult = await res.json();

      received(jsonResult);

      setIsLoading(false);
    };
    try {
      invokeFetch();
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };
  return { isLoading, error, implementFetch };
};

export default useFetch;
