import { useCallback, useState } from "react";
import useFetchWithTimeout from './useFetchWithTimeout';

function usePOST(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (bodyContent) => {
      setLoading(true);
      setError(null);
      console.log(bodyContent)


      try {
        
        const response = await fetch(url, {
          method: "GET",
          // headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyContent),
        });


        if (response.ok) {
          const data = await response.json();
          setLoading(false);
          return data;
        }
        if (!response) {
          throw new Error("Request lasted longer than 11s");
        }
      } catch (err) {
        setError(err.message || "Something went wrong!");
        setLoading(false);
        throw new Error(err);
      }
    },
    [url]
  );

  return {
    loading: loading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default usePOST;
