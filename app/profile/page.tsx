"use client";
import RecipeCard from "@/components/RecipeCard";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType;

  return (
    <div>
      <h2>Saved recipes</h2>
      {user?.recipes.length === 0 ? (
        <p>No recipes saved</p>
      ) : (
      user?.recipes &&
        user.recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} {...recipe} />
        ))
      )}
    </div>
  );
};

export default ProfilePage;
