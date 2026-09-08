"use client";

import RecipeCard from "@/components/RecipeCard";
import { useUserContext } from "@/contexts/userContext";
import { RecipeType, UserContextType } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  const fetchRandomMeal = async () => {
    try {
      const respone = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`,
      );
      const data = await respone.json();
      if (data) setRecipe(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCatergoryMeal = async () => {
    try {
      const respone = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.category}`,
      );
      const data = await respone.json();
      if (data)
        setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user?.category) fetchRandomMeal();
    else fetchCatergoryMeal();
  }, []);

  return (
    <div>
      {user && (
        <p className="text-3xl my-4">
          Hi, {user.username}! Welcome to our website!
        </p>
      )}
      {user && <p>You have {user.recipes.length} saved recipes</p>}
      {recipe && <RecipeCard {...recipe} />}
    </div>
  );
}
