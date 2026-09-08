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
    <div>
      <h2>{id}</h2>
      {recipe! && (
        <div>
          <h2>{recipe.strMeal}</h2>
          <p>
            This is a {recipe.strCategory} recipe from {recipe.strCountry}
          </p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>Ingredients: </p>
          {recipe.ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
          <div>{recipe.strInstructions}</div>
          <RecipeButton {...recipe} />
        </div>
      )}
    </div>
  );
};

export default RecipePage;
