import type { Metadata } from "next";
import { Bebas_Neue, Lato, Courier_Prime } from "next/font/google";
import { BRAND, MARKETING_SITE_URL } from "@/lib/brand";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const courier = Courier_Prime({
  variable: "--font-courier",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(MARKETING_SITE_URL),
  title: {
    default: `${BRAND.name} — The artist app from ${BRAND.fullName}`,
    template: `%s · ${BRAND.name}`,
  },
  description: `Inventory your work, make gallery-ready PDFs, and sell through ${BRAND.fullName}. ${BRAND.tagline}`,
  openGraph: {
    siteName: BRAND.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${lato.variable} ${courier.variable}`}>
        {children}
      </body>
    </html>
  );
}
