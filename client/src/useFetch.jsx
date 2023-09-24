import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Could not fetch the data for that resource try to reload the page"
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        console.log(err);
      });
  }, [url]);

  return ({ data, isPending, error });
};

export default useFetch;
