import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Sanusi | Full Stack Developer",
  description: "Portfolio of John Sanusi, a Full Stack Developer specializing in the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-[#07090d] py-8 text-center text-sm text-[#8a8a91]">
          <p>© {new Date().getFullYear()} John Sanusi. All rights reserved.</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
