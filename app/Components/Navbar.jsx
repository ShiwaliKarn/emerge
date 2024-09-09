"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import {
  IoPersonCircle,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import AuthContext from "@/app/context/AuthContext.js";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="text-white flex items-center justify-between font-semibold fixed right-0 left-0 p-6 nav-backround z-20">
      <Link href="/" className="cursor-pointer text-xl">
        EMERGE
      </Link>
      <ul className="flex items-center gap-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-white underline underline-offset-8"
                  : "text-gray-400"
              } cursor-pointer`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {isAuthenticated ? (
        <div
          className="relative border-b-transparent border-b-[10px]"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <IoPersonCircle
            className="text-white text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="absolute right-0  w-36 bg-white rounded-md shadow-lg py-2 z-20">
              <Link
                href="/profile"
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                onClick={() => setShowMenu(false)}
              >
                Profile
                <IoPersonOutline className="text-green-600" />
              </Link>
              <span
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between cursor-pointer"
              >
                Sign out
                <IoLogOutOutline className="text-blue-600" />
              </span>
            </div>
          )}
        </div>
      ) : (
        <Link href="/sign-up">
          <button>SIGN UP</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
