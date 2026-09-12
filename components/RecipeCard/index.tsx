import { RecipeType } from "@/types/types";
import Link from "next/link";

const RecipeCard = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  return (
    <Link
      className="block border border-black shadow-sm rounded-2xl text-center transition-transform overflow-hidden hover:scale-105"
      href={`/recipes/${idMeal}`}
    >
      <img
        className="w-full h-32 md:h-40 object-cover"
        src={strMealThumb}
        alt={strMeal}
      />
      <h3 className="p-4 text-lg md:text-xl">{strMeal}</h3>
    </Link>
  );
};

export default RecipeCard;
