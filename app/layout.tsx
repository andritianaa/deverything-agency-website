import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { CursorFollower } from "@/components/ui/cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Deverything - Agence de developpement Innovante : Web, Mobile & SaaS en 2 mois",
    template: "%s | Deverything",
  },
  description:
    "Deverything est une Agence de developpement qui transforme vos idées en solutions performantes : site web, application mobile ou SaaS, livrés en moins de 2 mois. Design UX/UI, développement, branding et stratégie sur mesure.",
  keywords: [
    "agence web",
    "développement SaaS",
    "design UX/UI",
    "création site web",
    "application mobile",
    "branding",
    "Agence de developpement",
    "refonte site web",
    "startups",
  ],
  authors: [{ name: "Deverything" }],
  creator: "Deverything Agency",
  publisher: "Deverything Agency",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://deverything.vercel.app",
    title:
      "Deverything - Agence de developpement Innovante : Web, Mobile & SaaS en 2 mois",
    description:
      "Deverything aide les entrepreneurs et startups à lancer leur produit digital en un temps record. Design, développement et stratégie tout-en-un.",
    siteName: "Deverything Agency",
    images: [
      {
        url: "https://deverything.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Deverything - Agence de developpement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Deverything - Agence de developpement Innovante : Web, Mobile & SaaS en 2 mois",
    description:
      "Deverything conçoit et développe vos sites web, applications mobiles et SaaS sur mesure, livrés en 2 mois maximum.",
    images: ["https://deverything.vercel.app/og-image.jpeg"],
    creator: "@deverything",
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
  generator: "Next.js",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <CursorFollower />
      </body>
    </html>
  );
}
