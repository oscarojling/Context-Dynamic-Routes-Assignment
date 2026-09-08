import { RecipeType } from "@/types/types";
import Link from "next/link";

const RecipeCard = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  return (
    <Link className="max-w-md mx-auto my-4" href={`/recipes/${idMeal}`}>
      <div className="w-[80%] m-auto">
      <img className="rounded-2xl w-full h-auto" src={strMealThumb} alt={strMeal} />
      </div>
      <h3 className="my-4 text-3xl">{strMeal}</h3>
    </Link>
  );
};

export default RecipeCard