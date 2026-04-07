import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Katarina Petrov — Staff UX Designer & Design Manager",
  description:
    "Good design beats bad pizza. Portfolio of Katarina Petrov, Staff UX Designer and Design Manager based in Berlin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full overflow-hidden antialiased`}>
      <body className="h-full flex flex-col bg-white text-black overflow-hidden">
        <Nav />
        <main className="flex-1 pt-14 overflow-y-auto" style={{ overscrollBehavior: "none" }}>{children}</main>
      </body>
    </html>
  );
}
