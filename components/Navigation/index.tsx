import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-amber-400 text-2xl p-4">
      <div className="max-w-md flex justify-evenly m-auto">
        <Link className="border-white border p-4 rounded-2xl text-2xl" href="/">Home</Link>
        <Link className="border-white border p-4 rounded-2xl text-2xl" href="/categories">Categories</Link>
        <Link className="border-white border p-4 rounded-2xl text-2xl" href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navigation;
