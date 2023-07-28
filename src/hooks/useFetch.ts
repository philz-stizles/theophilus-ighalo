'use client';

import { baseUrl } from '@/utils/constants';
import { fetcher } from '@/utils/fetcher';
import { useEffect, useState } from 'react';

const useFetch = <T>(endpoint: string, init: T) => {
  const [data, setData] = useState<T>(init);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`${baseUrl}/${endpoint}`);
    setIsLoading(true);
    fetcher(`${baseUrl}/${endpoint}`)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setError(error);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
