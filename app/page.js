"use client";
import ReadMore from "@/components/ReadMore";
import RegisterDialog from "@/components/RegisterDialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

const Home = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className="pt-20 fade">
      <RegisterDialog />
      <Swiper
        navigation
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="-mt-[6px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: "cover",
              }}
              className="h-[500px]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ReadMore />
    </div>
  );
};

export default Home;
