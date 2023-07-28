'use client';

import useFetch from '@/hooks/useFetch';
import { Blog } from '@/types';
import BlogCard from './components/BlogCard/BlogCard';

export default function Blog() {
  const { data: blogs, isLoading: loadingBlogs, error } = useFetch<Blog[]>('api/blogs', []);
  // const { data: categories, isLoading: loadingCategories } = useCategories();
  console.log(error);
  return <main className='flex-1'>
    {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
  </main>;
}
