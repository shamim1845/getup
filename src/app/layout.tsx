import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const CircularStd = localFont({
  src: [
    {
      path: "./font/CircularStd-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/CircularStd-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/CircularStd-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Get valuable leads inside WordPress.",
  description:
    "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${CircularStd.className}`}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
