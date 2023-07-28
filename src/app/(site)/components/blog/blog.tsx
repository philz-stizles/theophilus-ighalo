import { Container, Section } from '@/components/layout';
import Image from 'next/image';
import { Button } from '@/components/ui';
import SectionHeader from '@/components/ui/section-header/section-header';
import { blogs } from '@/data/blogs';
import { Blog } from '@/types';

const Blog = () => {
  return (
    <Section id="blog">
      <Container>
        <SectionHeader title="Blog" />
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((item) => (
            <BlogCard
              key={item.id}
              item={item}
              href={`/blogs/${item.id}`}
            ></BlogCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

type BlogCardProps = {
  item: Blog;
  href: string;
};

const BlogCard = ({
  item: { title, content, imageUrl, author, createdAt },
  href,
}: BlogCardProps) => {
  return (
    <div className="flex-auto shadow-lg shadow-slate-100 border border-slate-100">
      <div className='relative w-full h-64'>
        <Image className=' grayscale' src={imageUrl} alt="" fill />
      </div>
      <div className="py-10 px-5 bg-gray-950 text-slate-50">
        <h5 className="font-semibold text-lg mb-1">{title}</h5>
        {/* <small className=" text-orange-400 inline-block mb-4"></small> */}
        <small className=" text-slate-400 inline-block mb-4">
          By {author?.name} at {createdAt}
        </small>
        <div className="font-light text-sm text-slate-50 leading-6">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Blog;
