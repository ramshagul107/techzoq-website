import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My First Frontend Project | Techzoq",
  description:
    "My First Frontend Project - Techzoq Digital Solutions & Software Development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer - Shows on Every Page */}
        <Footer />

      </body>
    </html>
  );
}