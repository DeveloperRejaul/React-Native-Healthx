import { useState } from 'react';
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
export const useFetch = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  // handle all het requests this function
  const handleGet = (endPoint: string, token?: string) => {
    setLoading(true);
    fetch(BASE_URL + endPoint, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
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

  // handle all post request  this function
  const handlePost = (endPoint: string, body: object) => {
    setLoading(true);
    fetch(BASE_URL + endPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
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

  return { handleGet, handlePost, isLoading, isSuccess, data, isError };
};
