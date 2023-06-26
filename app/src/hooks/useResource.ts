import { baseUrl } from '@/utils/constants';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

const useResource = (endpoint: string) => {
  const { data, error } = useSWR(`${baseUrl}/${endpoint}`, fetcher);
  return { data, error };
};


export default useResource;