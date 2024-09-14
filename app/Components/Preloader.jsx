import Image from "next/image";

const Preloader = () => {
  return (
    <div className="w-full h-screen z-20 fixed top-0 left-0 flex items-center justify-center bg-[#110e28] ">
      <Image
        src="/emergeLogo.png"
        width={300}
        height={300}
        alt="preloader"
        className="preloader-animation"
      />
    </div>
  );
};

export default Preloader;
