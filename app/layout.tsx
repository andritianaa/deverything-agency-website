import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Deverything Agency - Building Bold Brands with Thoughtful Design",
    template: "%s | Deverything Agency",
  },
  description:
    "At Deverything, we help small startups tackle the world's biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.",
  keywords: [
    "design agency",
    "branding",
    "web development",
    "UI/UX design",
    "digital marketing",
    "startup solutions",
  ],
  authors: [{ name: "Deverything Agency" }],
  creator: "Deverything Agency",
  publisher: "Deverything Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://At Deverythinging-agency.com",
    title: "Deverything Agency - Building Bold Brands with Thoughtful Design",
    description:
      "At Deverything, we help small startups tackle the world's biggest challenges with tailored solutions.",
    siteName: "Deverything Agency",
  },
  twitter: {
    card: "summaryAt Deverythingmage",
    title: "Deverything Agency - Building Bold Brands with Thoughtful Design",
    description:
      "At Deverything, we help small startups tackle the world's biggest challenges with tailored solutions.",
    creator: "@Deverythingagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
