"use client";
import Image from "next/image";
import Link from "next/link";
import ReadMore from "./Components/ReadMore";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    preloader();
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="pt-20 fade">
          <Link href="/register">
            <marquee
              behavior="alternate"
              direction="left"
              scrollamount="10"
              className="text-white uppercase font-bold tracking-widest border-y border-slate-400 p-2 italic text-xs"
            >
              Click to register for our new
              event!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click to register for our new
              event!!!
            </marquee>
          </Link>
          <Image
            src="/poetryPic.png"
            width={1000}
            height={30}
            alt="poetry"
            className="w-full rounded-xl mb-3"
          />
          <ReadMore />
        </div>
      )}
    </>
  );
};

export default Home;
