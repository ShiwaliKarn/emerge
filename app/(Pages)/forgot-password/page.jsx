"use client";
import { useState } from "react";
import { account } from "@/app/appwrite/appwrite.js";
import toast from "react-hot-toast";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await account.createRecovery(
        email,
        "http://localhost:3000/reset-password"
      );
      setEmail("");
      toast.success("Email has been sent!");
    } catch (error) {
      toast.error("Error sending email!");
      console.error("Recovery Error:", error.message);
      setEmail("");
    } finally {
      setEmail("");
      setIsSending(false);
    }
  };

  return (
    <section className="pt-32 container pl-4">
      <div className="flex flex-col gap-1">
        <label className="text-slate-400">Enter your email</label>
        <input
          type="email"
          placeholder="email"
          className="sm:w-96 w-[80%] p-2 rounded-sm"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="text-left button-gradient w-20 mt-2"
          onClick={(e) => handleForgetPassword(e)}
          disabled={isSending}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Page;
