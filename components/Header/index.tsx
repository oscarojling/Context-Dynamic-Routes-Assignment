"use client";

import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";

const Header = () => {
  const { user } = useUserContext() as UserContextType;
  return (
    <header className="bg-red-500 p-8 text-center text-white">
      <h1 className="text-6xl">Oscar's Resturant</h1>
      <h2 className="text-3xl mt-4">Discounts for families</h2>
    </header>
  );
};

export default Header;
