"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Client, Account } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRTITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

const account = new Account(client);

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { userId, secret } = router.query;

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      if (userId && secret) {
        await account.updateRecovery(userId, secret, password, confirmPassword);
        setMessage("Password reset successful! You can now log in.");
      } else {
        setMessage("Invalid or missing token. Please try again.");
      }
    } catch (error) {
      console.error("Error resetting password:", error.message);
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="reset-password-form">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
