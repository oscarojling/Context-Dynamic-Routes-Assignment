import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/profile", label: "Profile" },
];

const Navigation = () => {
  return (
    <nav className="border-b border-black p-4">
      <div className="max-w-md flex justify-evenly m-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            className="border-primary border p-2 md:p-4 rounded-2xl text-base md:text-2xl transition-colors hover:bg-primary hover:text-background"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
