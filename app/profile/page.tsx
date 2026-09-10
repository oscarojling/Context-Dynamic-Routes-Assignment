"use client";
import RecipeCard from "@/components/RecipeCard";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType;

  return (
    <div className="p-4">
      <h2 className="text-foreground text-xl md:text-2xl mb-4">
        Saved recipes
      </h2>
      {user?.recipes.length === 0 ? (
        <p className="text-foreground">No recipes saved</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {user?.recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} {...recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
