import CategoryButton from "@/components/CategoryButton";
import RecipeCard from "@/components/RecipeCard";
import { RecipeType } from "@/types/types";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  let recipes: RecipeType[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${slug}`,
    );
    const data = await response.json();
    recipes = data.meals;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-foreground text-xl md:text-2xl">
          Here are {slug} recipes
        </h3>
        <CategoryButton strCategory={slug} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} {...recipe} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
