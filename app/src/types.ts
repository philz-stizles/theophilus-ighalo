import { IconType } from 'react-icons';

export type Skill = {
  id: string;
  title: string;
  description: string;
};

export type Stat = {
  id: string;
  label: string;
  figure: string;
  icon: IconType;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  images?: string[];
  category?: Category;
  comments?: Comment[];
  author?: Author;
  createdAt: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  blogs?: Blog[];
};

export type Comment = {
  id: string;
  email: string;
  content: string;
};

export type Author = {
  id?: string;
  email?: string;
  name: string;
};
