import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import FloatingLinks from "@/components/FloatingLinks";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tae Lee",
  description: "Tae Lee - Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased font-medium overflow-x-hidden`}
      >
        <Navbar />
        <FloatingLinks />
        {children}
      </body>
    </html>
  );
}