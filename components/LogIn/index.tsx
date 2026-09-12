"use client";
import { useUserContext } from "@/contexts/userContext";
import { user } from "@/data/users";
import { UserContextType } from "@/types/types";
import { SetStateAction, useState } from "react";

const LogIn = () => {
  const { setUser } = useUserContext() as UserContextType;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loggedInUser = user.find(
      (item) => item.username === username && item.password === password,
    );
    if (loggedInUser) setUser(loggedInUser);
  };

  return (
    <form className="border rounded-2xl border-black p-4 my-4 max-w-md mx-auto">
      <h2 className="text-center text-2xl">Log In</h2>
      <label className="field" htmlFor="username">
        Enter your username
      </label>
      <input
        className="field border rounded-lg p-2 bg-background w-full"
        id="username"
        placeholder="Enter username"
        onChange={handleUsername}
        value={username}
      />
      <label className="field" htmlFor="password">
        Enter your password
      </label>
      <input
        className="field border rounded-lg p-2 bg-background w-full"
        type="password"
        id="password"
        placeholder="Enter password"
        onChange={handlePassword}
        value={password}
      />
      <button
        onClick={handleLogIn}
        className="bg-primary cursor-pointer text-background p-4 rounded-2xl w-full"
      >
        Log In
      </button>
    </form>
  );
};

export default LogIn;
