import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/myComponents/navbar/Navbar";
import "./globals.css";
import { BasketProvider } from "@/context/BasketContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "eCommerce App",
  description: "eCommerce Portfolio App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <BasketProvider>
          {" "}
          <Navbar />
          {children}
        </BasketProvider>
      </body>
    </html>
  );
}
