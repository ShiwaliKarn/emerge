import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/app/context/AuthContext.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emerge",
  description: "The poetry club",
  icons: {
    icon: "/logoBlack.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <Toaster position="bottom-left" reverseOrder={false} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
