import { baseUrl } from '@/utils/constants';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

const useCategories = () => {
  const { data, isLoading, error } = useSWR(`${baseUrl}/api/categories`, fetcher);
  return { data, isLoading, error };
};

export default useCategories;