"use client";

import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";

const CategoryButton = ({ strCategory }: { strCategory: string }) => {
  const { user, setUser } = useUserContext() as UserContextType;
  const handleClick = () => {
    if (user && user.category !== strCategory)
      setUser({ ...user, category: strCategory });
    else if (user && user.category === strCategory)
      setUser({ ...user, category: "" });
  };

  return (
    <button
      className={`p-4 cursor-pointer rounded-xl transition-colors ${user?.category === strCategory ? "bg-primary text-background" : "bg-secondary"}`}
      onClick={handleClick}
    >
      {user?.category === strCategory ? "Remove Category" : "Favorite Category"}
    </button>
  );
};

export default CategoryButton;
