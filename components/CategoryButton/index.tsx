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

  return <button className={`bg-secondary text-foreground p-4 rounded-xl`} onClick={handleClick}>{user?.category === strCategory ? "Remove": "Set"}</button>;
};

export default CategoryButton;
