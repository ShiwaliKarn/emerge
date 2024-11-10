"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="container ">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <Link href="/poetryPic.png" data-aos="fade-up">
          <img
            alt="Image 2"
            src="/poetryPic.png"
            className="hover:scale-105 transition  py-4"
          />
        </Link>
        <Link href="/poetryPic.png" data-aos="fade-up">
          <img
            alt="Image 2"
            src="/poetryPic.png"
            className="hover:scale-105 transition  py-4"
          />
        </Link>
        <Link href="/poetryPic.png" data-aos="fade-up">
          <img
            alt="Image 2"
            src="/poetryPic.png"
            className="hover:scale-105 transition  py-4"
          />
        </Link>
        <Link href="/poetryPic.png" data-aos="fade-up">
          <img
            alt="Image 2"
            src="/poetryPic.png"
            className="hover:scale-105 transition  py-4"
          />
        </Link>
        ...
      </LightGallery>
    </div>
  );
}
export default Gallery;
