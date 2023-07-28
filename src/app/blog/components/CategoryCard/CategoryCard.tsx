import { Category } from '@/types';

type Props = {
  category: Category;
};

const CategoryCard = ({ category: { title, description } }: Props) => {
  return <div>CategoryCard</div>;
};

export default CategoryCard;
