"use client";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import {
  IoPersonCircle,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import AuthContext from "@/app/context/AuthContext.js";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, handleLogout } = useContext(AuthContext);
  const [activeItem, setActiveItem] = useState("HOME");
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  // const handleClickAnywhere = () => {
  //   if (
  //     activeItem != "HOME" ||
  //     activeItem != "ABOUT US" ||
  //     activeItem != "CONTACT"
  //   ) {
  //     setActiveItem("");
  //   }
  // };

  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMenu = () => {
    setClicked(false);
  };

  useEffect(() => {}, [isAuthenticated]);
  return (
    <nav className="text-white flex items-center justify-between font-semibold fixed right-0 left-0 p-5 nav-backround z-20 shadow-sm shadow-slate-800">
      <Link href="/" className="cursor-pointer text-xl flex items-center">
        EMERGE
        <Image src="/emergeLogo.png" alt="logo" height={50} width={50} />
      </Link>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link href="/" onClick={closeMenu}>
          <li
            onClick={() => setActiveItem("HOME")}
            className={`cursor-pointer ${
              activeItem === "HOME"
                ? "text-white underline underline-offset-8 "
                : "text-gray-400"
            }`}
          >
            HOME
          </li>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <li
            onClick={() => setActiveItem("ABOUT US")}
            className={`cursor-pointer ${
              activeItem === "ABOUT US"
                ? "text-white underline underline-offset-8"
                : "text-gray-400"
            }`}
          >
            ABOUT US
          </li>
        </Link>
        <Link href="#contact" onClick={closeMenu}>
          <li
            onClick={() => setActiveItem("CONTACT")}
            className={`cursor-pointer ${
              activeItem === "CONTACT"
                ? "text-white underline underline-offset-8"
                : "text-gray-400"
            }`}
          >
            CONTACT
          </li>
        </Link>
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
          <button className="button-gradient">SIGN UP</button>
        </Link>
      )}
      <div onClick={handleClick} className="sm:hidden block ml-[-23%] ">
        {clicked ? (
          <RxCross1 className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
