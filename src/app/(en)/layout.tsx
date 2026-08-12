import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { en } from "@/dictionaries/en";
import { AnalyticsConsent } from "@/components/privacy/analytics-consent";

import "../globals.css";

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

const title = "LRA Software — Custom software, automation and AI for businesses";

const description =
  "LRA Software builds custom software, automations, integrations, and AI-powered solutions for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "LRA Software",

  title: {
    default: title,
    template: "%s | LRA Software",
  },

  description,

  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
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

const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-background font-sans text-text">
        {children}

        <AnalyticsConsent gtmId={googleTagManagerId} content={en.privacy} />
      </body>
    </html>
  );
}
