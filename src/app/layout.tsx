import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.lrasoftware.com";

const title = "LRA Software — Sistemas, automações e IA para empresas";

const description =
  "A LRA Software desenvolve sistemas sob medida, automações, integrações e soluções com inteligência artificial para empresas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "LRA Software",

  title: {
    default: title,
    template: "%s | LRA Software",
  },

  description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "LRA Software",
    title,
    description,
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-background font-sans text-text">{children}</body>
    </html>
  );
}
