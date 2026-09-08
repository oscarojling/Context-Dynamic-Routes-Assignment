"use client";

import { useUserContext } from "@/contexts/userContext";
import { UserContextType } from "@/types/types";
import { ReactNode } from "react";
import LogIn from ".";
import Navigation from "../Navigation";

const LogInWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType;
  return (
    <div className="grow">
      {user ? 
        <>
          <Navigation />
          <div className="px-4 text-center wrap flex justify-center">
          {children}
          </div>
        </>
       : 
        <LogIn />
      }
    </div>
  );
};

export default LogInWrapper;
