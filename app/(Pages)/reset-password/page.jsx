"use client";
import { useState } from "react";
import { account } from "@/app/appwrite/appwrite.js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [resetting, setRestting] = useState(false);
  const [resetPassword, setResetPassword] = useState({
    newPassword: "",
    reEnterPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setRestting(true);
    if (resetPassword.newPassword !== resetPassword.reEnterPassword) {
      setPasswordsMatch(false);
      setRestting(false);
      return;
    }
    setPasswordsMatch(true);

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");

    try {
      setRestting(true);
      await account.updateRecovery(
        userId,
        secret,
        resetPassword.newPassword,
        resetPassword.reEnterPassword
      );
      toast.success("Password has been reset!");
      setResetPassword("");
      setRestting(false);
      router.push("/sign-up");
    } catch (error) {
      console.error("Password Reset Error:", error.message);
      toast.error("Failed to reset password");
      setResetPassword("");
      setRestting(false);
    }
  };

  return (
    <section className="pt-32 container pl-4 fade">
      <div className="flex flex-col gap-1">
        <label className="text-slate-400">New password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="sm:w-96 w-[80%] p-2 rounded-sm"
          minLength={8}
          required
          onChange={(e) =>
            setResetPassword({ ...resetPassword, newPassword: e.target.value })
          }
        />
        <label className="text-slate-400">Re-enter password</label>
        <input
          type="password"
          placeholder="Re-enter password"
          className="sm:w-96 w-[80%] p-2 rounded-sm"
          required
          onChange={(e) =>
            setResetPassword({
              ...resetPassword,
              reEnterPassword: e.target.value,
            })
          }
        />
        {!passwordsMatch && (
          <p className="text-red-500">Passwords do not match!</p>
        )}

        <button
          className="text-left button-gradient w-36 mt-2"
          onClick={handleResetPassword}
          disabled={resetting}
        >
          Reset Password
        </button>
      </div>
    </section>
  );
};

export default Page;
