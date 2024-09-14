"use client";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

const PreloaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <>{isLoading ? <Preloader /> : <>{children}</>}</>;
};

export default PreloaderWrapper;
