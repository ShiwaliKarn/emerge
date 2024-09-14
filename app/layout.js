import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/app/context/AuthContext.js";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";

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
          <PreloaderWrapper>{children}</PreloaderWrapper>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
