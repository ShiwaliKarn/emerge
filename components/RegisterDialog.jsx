"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import toast from "react-hot-toast";

const RegisterDialog = () => {
  const [isSending, setIsSending] = useState(false);
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [profession, setProfession] = useState("");
  const [open, setOpen] = useState(false);
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
          const response = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName,
              email,
              number,
              profession,
              message,
            }),
          });
          setFullName("");
          setMessage("");
          setNumber("");
          setEmail("");
          setProfession("");
          setOpen(false);
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
      setFullName("");
      setMessage("");
      setNumber("");
      setEmail("");
      setProfession("");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <marquee
          behavior="alternate"
          direction="left"
          scrollamount="10"
          className="text-white uppercase font-bold tracking-widest border-y border-slate-400 p-2 italic text-xs"
        >
          Click to register for our new
          event!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click to register for our new
          event!!!
        </marquee>
      </DialogTrigger>
      <DialogContent className="bg-[#0b0919] text-white">
        <DialogHeader>
          <DialogTitle>
            <h3 className="font-semibold text-center tracking-wide text-gray-200">
              REGISTER NOW
            </h3>
          </DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-1" onSubmit={sendMail}>
              <label className="text-left text-gray-400"> Name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-2 text-black rounded-sm"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <label className="text-left text-gray-400">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-black rounded-sm"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="text-left text-gray-400"> Mobile Number*</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="p-2 rounded-sm text-black"
                required
                pattern="[0-9]{10}"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <label className="text-left text-gray-400">Profession*</label>
              <select
                name="Profession"
                className="rounded-sm h-10 text-black"
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

              <label className="text-left text-gray-400">Message</label>
              <textarea
                placeholder="How did you hear about this club?"
                className="h-20 p-2 rounded-sm text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <div className="text-center mt-3">
                <button
                  type="submit"
                  disabled={isSending}
                  className="button-gradient"
                >
                  Register
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
