'use client';

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import useFetch from '@/hooks/useFetch';
import { Blog } from '@/types';

export default function Blog() {
  const params = useParams();
  const { data, isLoading, error } = useFetch<Blog | null>(
    `api/blogs/${params.blogId}`,
    null
  );
  console.log(data, isLoading, error);
  return <main></main>;
}
