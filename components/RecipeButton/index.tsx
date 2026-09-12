"use client";

import { useUserContext } from "@/contexts/userContext";
import { RecipeType, UserContextType } from "@/types/types";

const RecipeButton = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  const { user, setUser } = useUserContext() as UserContextType;

  const handleClick = () => {
    const recipe: RecipeType = { idMeal, strMeal, strMealThumb };
    const alreadySaved = user!.recipes.find(
      (recipe) => recipe.idMeal === idMeal,
    )
      ? true
      : false;
    if (alreadySaved) {
      setUser({
        ...user!,
        recipes: user!.recipes.filter(
          (savedRecipe) => savedRecipe.idMeal !== idMeal,
        ),
      });
    } else {
      setUser({ ...user!, recipes: [...user!.recipes, recipe] });
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer rounded-xl p-4 my-4 transition-colors ${user && user.recipes.find((recipe) => recipe.idMeal === idMeal) ? "bg-primary text-background" : "bg-secondary"}`}
    >
      {user && user.recipes.find((recipe) => recipe.idMeal === idMeal)
        ? "Remove the Recipe"
        : "Save  Recipe"}
    </button>
  );
};

export default RecipeButton;
