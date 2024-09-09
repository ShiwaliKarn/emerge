"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [isSending, setIsSending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState(null);

  const professionOptions = [
    { value: "Student", label: "Student" },
    { value: "Working Professional", label: "Working Professional" },
  ];

  const sendMail = async (event) => {
    event.preventDefault();

    setIsSending(true);

    try {
      await toast.promise(
        (async () => {
          const response = await fetch("/api/send-mail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              number,
              profession,
              message,
            }),
          });
          setFirstName("");
          setLastName("");
          setMessage("");
          setNumber("");
          setEmail("");
          setProfession("");
          setImage(null);

          if (!response.ok) {
            throw new Error("Registration failed!");
          }
        })(),
        {
          loading: "Sending...",
          success: <b>Registration successful!</b>,
          error: <b>Registration failed!</b>,
        }
      );
    } catch (error) {
      console.error("Failure", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container pt-24">
      <h2 className="text-white font-semibold text-center text-2xl">
        REGISTER NOW
      </h2>
      <form className="p-3 max-w-3xl mx-auto" onSubmit={sendMail}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col">
            <label className="text-white">First name*</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="p-2 w-80 rounded-sm"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="p-2 w-80 rounded-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-6 justify-between flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col">
            <label className="text-white">Mobile Number*</label>
            <input
              type="tel"
              placeholder="8345627890"
              className="p-2 w-80 rounded-sm"
              required
              pattern="[0-9]{10}"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-80 rounded-sm"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-6 justify-between flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col">
            <label className="text-white">Upload your picture*</label>
            <input
              type="file"
              className="cursor-pointer w-80 border border-white p-2 text-white rounded-sm"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white">Profession*</label>
            <select
              name="Profession"
              className="w-80 rounded-sm h-10"
              required
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option>Select</option>
              {professionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6 w-80 sm:w-full mx-auto">
          <label className="text-white">Message</label>
          <textarea
            placeholder="How did you hear about this club?"
            className="h-24 p-2 rounded-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
