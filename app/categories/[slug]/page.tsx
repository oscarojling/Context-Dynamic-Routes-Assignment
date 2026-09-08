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
    <div>
      <h3>Here are {slug} recipes</h3>
      <CategoryButton strCategory={slug} />
      {recipes &&
        recipes.map((recipe) => <RecipeCard key={recipe.idMeal} {...recipe} />)}
    </div>
  );
};

export default CategoryPage;
