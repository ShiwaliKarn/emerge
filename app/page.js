import Image from "next/image";
import ReadMore from "./Components/ReadMore";
import RegisterDialog from "./Components/RegisterDialog";

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
