import { Blog } from '@/types';

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog: { title, content, imageUrl, images } }: Props) => {
  return <div>BlogCard</div>;
};

export default BlogCard;
