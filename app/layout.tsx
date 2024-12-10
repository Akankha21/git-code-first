import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

import "./globals.css";

export const metadata: Metadata = {
  title: "Akankha's Blog",
  description: "Generated by Akankha Haidar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />

        {children}
      </body>
    </html>
  );
}
