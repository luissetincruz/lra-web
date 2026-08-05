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

const title = "LRA Software — Sistemas, automações e IA para empresas";
const description =
  "A LRA Software desenvolve sistemas sob medida, automações, integrações e soluções com inteligência artificial para empresas.";

export const metadata: Metadata = {
  applicationName: "LRA Software",
  title: {
    default: title,
    template: "%s | LRA Software",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LRA Software",
    title,
    description,
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
