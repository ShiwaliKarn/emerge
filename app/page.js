import Image from "next/image";
import ReadMore from "@/components/ReadMore";
import RegisterDialog from "@/components/RegisterDialog";

const Home = () => {
  return (
    <div className="pt-20 fade">
      <RegisterDialog />
      <Image
        src="/poetryPic.png"
        width={1000}
        height={30}
        alt="poetry"
        className="w-full rounded-xl mb-3"
      />
      <ReadMore />
    </div>
  );
};

export default Home;
