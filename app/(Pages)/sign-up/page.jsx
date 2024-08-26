import { IoPerson } from "react-icons/io5";
import { GoKey } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

const SignUp = () => {
  return (
    <section className="flex max-sm:flex-col pt-32 container px-24 max-sm:gap-[70px] gap-[200px] ">
      <div className="flex gap-9 flex-col justify-center">
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          inventore illo minima similique velit quibusdam libero alias, ullam
          exercitationem ex iusto porro soluta repellendus ea rem laborum cumque
          nostrum? Dolor?
        </p>

        <button className="w-40">Get Started</button>
      </div>
      <div className="flex items-center flex-col gap-4">
        <div className=" rounded-full p-3 h-16 w-16 bg-white  flex justify-center items-center">
          <IoPerson className="text-6xl" />
        </div>
        <form className="flex  flex-col gap-4 items-center">
          <div className="relative">
            <IoPerson className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />
            <input
              type="text"
              className="w-60 p-2 pl-10 outline-none rounded-3xl"
              required
              placeholder="username"
            />
          </div>
          <div className="relative">
            <MdOutlineMail className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />
            <input
              type="email"
              className="w-60 p-2 pl-10 outline-none rounded-3xl"
              required
              placeholder="email"
            />
          </div>
          <div className="relative">
            <GoKey className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />

            <input
              type="password"
              className="w-60 p-2 pl-10 outline-none rounded-3xl"
              required
              placeholder="password"
              min={8}
            />
          </div>
          <div className="relative">
            <GoKey className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />

            <input
              type="password"
              className="w-60 p-2 pl-10 outline-none rounded-3xl"
              required
              placeholder="re-enter password"
            />
          </div>
          <button className="w-20">Sign Up</button>
          <p className="text-white text-sm cursor-pointer hover:underline">
            Already have an account? Sign in
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
