import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, number, profession, message } =
      await request.json();

    const ipAddress =
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for") ||
      request.connection.remoteAddress;

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOption = {
      from: `"Emerge" <${process.env.EMAIL_USER}>`,
      to: "pouringff1@gmail.com",
      subject: "New Registation",
      text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Email: ${email}
                Phone Number: ${number}
                Profession: ${profession}
                Message: ${message}
                IP Address: ${ipAddress}\n
             `,
    };

    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
