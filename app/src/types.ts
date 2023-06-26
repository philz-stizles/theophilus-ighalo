import { IconType } from "react-icons";

export type Skill = {
  id: string;
  title: string;
  description: string;
};

export type Stat = {
  id: string;
  label: string;
  figure: string;
  icon: IconType
};


export type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  images: string[];
  category: Category;
  comments?: Comment[]
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