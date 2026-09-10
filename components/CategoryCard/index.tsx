import { CategoryType } from "@/types/types";
import Link from "next/link";

const CategoryCard = ({ strCategory, strCategoryThumb }: CategoryType) => {
  return (
    <Link className="block bg-surface rounded-2xl text-center transition-transform overflow-hidden hover:scale-105" href={`/categories/${strCategory}`}>
      <img className="w-full h-32 md:h-40 object-cover" src={strCategoryThumb} alt={strCategory} />
      <h2 className="p-4 text-foreground text-sm md:text-base">{strCategory}</h2>
    </Link>
  );
};

export default CategoryCard;
