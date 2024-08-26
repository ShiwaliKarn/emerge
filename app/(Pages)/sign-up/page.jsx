"use client";
import { IoPerson } from "react-icons/io5";
import { GoKey } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";

const SignUp = () => {
  const [currState, setCurrState] = useState("Sign In");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   if (currState === "Sign Up" && password !== reEnteredPassword) {
    //     setPasswordsMatch(false);
    //     return;
    //   }
    //   setPasswordsMatch(true);
    //   const user = { name, email, password };
    //   if (currState === "Sign Up") {
    //     registerUser(user);
    //   } else {
    //     loginUser({ email, password });
    //   }
  };
  return (
    <section className="flex max-sm:flex-col pt-32 container px-24 max-sm:gap-[70px] gap-[200px] ">
      <div className="flex gap-9 flex-col justify-center">
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          inventore illo minima similique velit quibusdam libero alias, ullam
          exercitationem ex iusto porro soluta repellendus ea rem laborum cumque
          nostrum? Dolor?
        </p>

        <button className="w-40 uppercase">Get Started</button>
      </div>
      <div className="flex items-center flex-col gap-4">
        <div className=" rounded-full p-3 h-16 w-16 bg-white  flex justify-center items-center">
          <IoPerson className="text-6xl" />
        </div>
        <form
          className="flex  flex-col gap-4 items-center"
          onSubmit={handleSubmit}
        >
          {currState === "Sign Up" && (
            <>
              <div className="relative">
                <IoPerson className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />
                <input
                  type="text"
                  className="w-60 p-2 pl-10 outline-none rounded-3xl"
                  required
                  placeholder="username"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </>
          )}

          <div className="relative">
            <MdOutlineMail className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />
            <input
              type="email"
              className="w-60 p-2 pl-10 outline-none rounded-3xl"
              required
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {currState === "Sign Up" && (
            <>
              <div className="relative">
                <GoKey className="absolute z-10 top-2 left-[10px] bg-black text-white rounded-full h-6 w-6 p-1 " />

                <input
                  type="password"
                  className="w-60 p-2 pl-10 outline-none rounded-3xl"
                  required
                  placeholder="re-enter password"
                  value={reEnteredPassword}
                  onChange={(event) => setReEnteredPassword(event.target.value)}
                />
              </div>
            </>
          )}
          <button className="w-20">
            {currState === "Sign Up" ? "Sign up" : "Log in"}
          </button>
          {currState === "Sign In" ? (
            <>
              <p className="text-white text-sm cursor-pointer">
                Forgot password?
              </p>
              <p
                className="text-white text-sm cursor-pointer"
                onClick={() => setCurrState("Sign Up")}
              >
                Don't have an account? Sign Up
              </p>
            </>
          ) : (
            <p
              className="text-white text-sm cursor-pointer"
              onClick={() => setCurrState("Sign In")}
            >
              Already have an account? Sign In
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
