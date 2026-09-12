"use client";
import RecipeCard from "@/components/RecipeCard";
import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";

const ProfilePage = () => {
  const { setUser, user } = useUserContext() as UserContextType;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl">Your Profile</h1>
        <button
          className="cursor-pointer border border-black rounded-full px-4 py-2 text-sm md:text-base hover:bg-primary hover:text-background hover:border-primary transition-colors"
          onClick={() => setUser(null)}
        >
          Log Out
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg md:text-xl mb-2">Saved recipes and category</h2>
        {!user?.category ? (
          <p className="mb-4">No favorite category</p>
        ) : (
          <span className="inline-block bg-secondary px-4 py-2 rounded-full mb-4">
            Favorite category: {user.category}
          </span>
        )}
        {user?.recipes.length === 0 ? (
          <p>No recipes saved</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {user?.recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} {...recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
