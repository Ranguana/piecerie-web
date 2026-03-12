import type { Metadata } from "next";
import { Geist, Archivo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piecerie - Artist Portfolios",
  description: "Discover artwork from talented artists on Piecerie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
