import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const receivedData = await response.json();
        setData(receivedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getData();
  }, [url]);
  return { loading, data };
};
