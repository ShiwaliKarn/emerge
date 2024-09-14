"use client";
import { IoPerson } from "react-icons/io5";
import { GoKey } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
import { account } from "@/lib/appwrite/appwrite.js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const SignUp = () => {
  const [currState, setCurrState] = useState("Sign In");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [googleSignIn, setGoogleSignIn] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currState === "Sign Up" && password !== reEnteredPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);

    if (currState === "Sign Up") {
      try {
        setIsSending(true);
        await registerUser(email, password, name);
        toast.success("Account created successfully!");
        setIsSending(false);
        router.push("/");
      } catch (error) {
        console.error("Registration Error:", error.message);
        toast.error("Error creating account!");
        setIsSending(false);
      }
    } else {
      try {
        setIsSending(true);
        await loginUser(email, password);
        toast.success("Logged in successfully!");
        setIsSending(false);
        router.push("/");
      } catch (error) {
        console.error("Login Error:", String(error.message));
        toast.error("Log in failed!");
        setIsSending(false);
      }
    }
  };

  const registerUser = async (email, password, name) => {
    await account.create("unique()", email, password, name);
  };

  const loginUser = async (email, password) => {
    await account.createEmailPasswordSession(email, password);
  };
  const handleGoogleLogin = () => {
    try {
      setGoogleSignIn(true);
      account.createOAuth2Session(
        "google",
        "http://localhost:3000/",
        "http://localhost:3000/"
      );
      toast.success("Logged in with Google successfully!");
      setGoogleSignIn(false);
      router.push("/");
    } catch (error) {
      console.error("Google Login Error:", error.message);
      toast.error("Google login failed!");
      setGoogleSignIn(false);
    }
  };

  return (
    <section className="flex flex-col sm:flex-row pt-32 container  lg:gap-[200px] gap-[70px] fade">
      <div className="flex gap-9 flex-col justify-center md:px-24 px-9">
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          inventore illo minima similique velit quibusdam libero alias, ullam
          exercitationem ex iusto porro soluta repellendus ea rem laborum cumque
          nostrum? Dolor?
        </p>

        <button className="button-gradient w-40 uppercase">Get Started</button>
      </div>
      <div className="flex items-center flex-col gap-4 px-24">
        <div className="rounded-full p-3 h-16 w-16 bg-white flex justify-center items-center">
          <IoPerson className="text-6xl" />
        </div>
        <form
          className="flex flex-col gap-4 items-center"
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
                  placeholder="name"
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
              minLength={8}
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
              {!passwordsMatch && (
                <p className="text-red-500">Passwords do not match!</p>
              )}
            </>
          )}

          <button className="w-20 button-gradient" disabled={isSending}>
            {currState === "Sign Up" ? "Sign up" : "Log in"}
          </button>
          <div className="text-white">
            <p className="text-center mb-2">OR</p>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center border border-white rounded-3xl gap-1 text-sm  p-2 cursor-pointer"
              disabled={googleSignIn}
            >
              <FcGoogle />
              {googleSignIn ? "Signing in..." : "Continue with google"}
            </button>
          </div>
          {currState === "Sign In" ? (
            <>
              <Link
                href="/forgot-password"
                className="text-white text-sm cursor-pointer"
              >
                Forgot password?
              </Link>
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
