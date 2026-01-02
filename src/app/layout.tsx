import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Richard Arowolo - Portfolio",
  description: "Creative Developer Portfolio",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} bg-zinc-950 text-zinc-400 font-sans antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
