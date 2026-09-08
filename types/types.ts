export type UserType = {
  username: string;
  password: string;
  category: string | null;
  recipes: RecipeType[];
};

export type RecipeType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type FullRecipeType = RecipeType & {
  strCountry: string;
  strInstructions: string;
  strCategory: string;
  ingredients: string[];
};

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};
