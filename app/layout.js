import React from "react";
import Navbar from "@/components/navbar/MainNavbar";
import "./globals.css";

export const metadata = {
  title: "Pixel",
  description: "About Pixel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
