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
    default: `${BRAND.appName} — The artist app from ${BRAND.fullName}`,
    template: `%s · ${BRAND.appName}`,
  },
  description: `Inventory your work, make gallery-ready PDFs, and sell through ${BRAND.fullName}. ${BRAND.tagline}`,
  openGraph: {
    siteName: BRAND.appName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables live on <html> because globals.css consumes them in :root.
  return (
    <html lang="en" className={`${bebas.variable} ${lato.variable} ${courier.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
