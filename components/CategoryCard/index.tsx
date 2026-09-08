import { CategoryType } from "@/types/types";
import Link from "next/link";

const CategoryCard = ({ strCategory, strCategoryThumb }: CategoryType) => {
  return (
    <Link href={`/categories/${strCategory}`}>
      <img src={strCategoryThumb} alt={strCategory} />
      <h2>{strCategory}</h2>
    </Link>
  );
};

export default CategoryCard;
