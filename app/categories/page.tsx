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
    <div className="p-4">
      <h2 className="text-black text-xl md:text-2xl mb-4">Categories Page</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category.idCategory} {...category} />
          ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
