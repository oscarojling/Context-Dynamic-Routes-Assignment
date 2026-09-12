import Link from "next/link";


const Navigation = () => {

  return (
    <nav className="border-b border-black p-4">
      <div className="max-w-md flex justify-evenly m-auto">
        <Link
          className="border-primary border p-2 md:p-4 rounded-2xl text-base md:text-2xl transition-colors hover:bg-primary hover:text-background"
          href="/"
        >
          Home
        </Link>
        <Link
          className="border-primary border p-2 md:p-4 rounded-2xl text-base md:text-2xl transition-colors hover:bg-primary hover:text-background"
          href="/categories"
        >
          Categories
        </Link>
        <Link
          className="border-primary border p-2 md:p-4 rounded-2xl text-base md:text-2xl transition-colors hover:bg-primary hover:text-background"
          href="/profile"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
