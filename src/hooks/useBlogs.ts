import { baseUrl } from '@/utils/constants';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

const useBlogs = () => {
  const { data, isLoading, error } = useSWR(`${baseUrl}/api/blogs`, fetcher);
  return { data, isLoading, error };
};

export default useBlogs;