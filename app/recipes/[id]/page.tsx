import RecipeButton from "@/components/RecipeButton";
import { FullRecipeType } from "@/types/types";

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  let recipe: FullRecipeType | undefined;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
    );
    const data = await response.json();
    recipe = await data.meals[0];

    if (recipe) {
      const keys = Object.keys(recipe!).filter((key) =>
        key.includes("strIngredient"),
      );
      const keysWithValue = keys.filter(
        (key: string) =>
          recipe![key as keyof FullRecipeType] !== "" &&
          recipe![key as keyof FullRecipeType] !== null,
      );
      const ingredients = keysWithValue.map(
        (key: string, index: number) =>
          `${recipe![key as keyof FullRecipeType]} - ${recipe![`strMeasure${index + 1}` as keyof FullRecipeType]}`,
      );

      recipe.ingredients = ingredients;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {recipe! && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {recipe.strMeal}
          </h2>
          <p className="text-foreground mb-4">
            This is a {recipe.strCategory} recipe from {recipe.strCountry}
          </p>

          <img
            className="w-full max-w-md h-64 object-cover rounded-2xl mx-auto mb-6"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />

          <p className="text-foreground font-bold mb-2">Ingredients: </p>
          {recipe.ingredients.map((ingredient, index) => (
            <p className="font-mono text-sm text-foreground" key={index}>
              {ingredient}
            </p>
          ))}

          <div className="text-foreground mt-4 leading-relaxed max-w-prose">
            {recipe.strInstructions}
          </div>
          <div className="mt-4 text-center">
            <RecipeButton {...recipe} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;
