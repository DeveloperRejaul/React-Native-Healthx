import { useState } from 'react';
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
export const useFetch = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const handleGet = (endPoint: string) => {
    setLoading(true);
    fetch(BASE_URL + endPoint)
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        setData(responseJson);
        setSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return { handleGet, isLoading, isSuccess, data, isError };
};
