import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Roboto } from "next/font/google";
import { companyName } from "./utils/constants";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: companyName,
  description: "The handcrafted design is now at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        <FollowerPointerCard>
          <Navbar />
          <Header />
          {children}
        </FollowerPointerCard>
      </body>
    </html>
  );
}
