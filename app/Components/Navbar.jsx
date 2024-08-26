"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="text-white flex items-center justify-between font-semibold fixed right-0 left-0 p-6 nav-backround z-20">
      <Link href="/" className="cursor-pointer text-xl">
        EMERGE
      </Link>
      <ul className="flex items-center gap-10 ">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-white underline underline-offset-8"
                  : "text-gray-400 "
              } cursor-pointer`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/sign-up">
        <button>SIGN UP</button>
      </Link>
    </nav>
  );
};

export default Navbar;
