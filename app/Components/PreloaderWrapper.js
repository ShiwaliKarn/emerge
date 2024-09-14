"use client";
import { useEffect, useState } from "react";
import Preloader from "@/app/Components/Preloader";

const PreloaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloaderShown = localStorage.getItem("preloaderShown");

    if (!preloaderShown) {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("preloaderShown", "true");
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <Preloader /> : <>{children}</>}</>;
};

export default PreloaderWrapper;
