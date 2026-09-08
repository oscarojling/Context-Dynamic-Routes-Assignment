import CategoryCard from "@/components/CategoryCard";
import { CategoryType } from "@/types/types";

const CategoriesPage = async () => {
  let categories: CategoryType[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`,
    );
    const data = await response.json();
    categories = data.categories;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h2>Categories Page</h2>
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category.idCategory} {...category} />
        ))}
    </div>
  );
};

export default CategoriesPage;
