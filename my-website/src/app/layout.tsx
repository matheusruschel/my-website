import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header-component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-background-purple min-h-screen overflow-x-hidden">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
