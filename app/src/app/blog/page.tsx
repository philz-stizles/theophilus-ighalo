'use client';

import useBlogs from '@/hooks/useBlogs';
import useCategories from '@/hooks/useCategories';
import useFetch from '@/hooks/useFetch';
import { Blog } from '@/types';
import BlogCard from './components/BlogCard/BlogCard';

export default function Blog() {
  const { data: blogs, isLoading: loadingBlogs, error } = useFetch<Blog[]>('api/blogs', []);
  // const { data: categories, isLoading: loadingCategories } = useCategories();
  console.log(error);
  return <main>
    {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
  </main>;
}
