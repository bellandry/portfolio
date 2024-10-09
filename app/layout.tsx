import TransitionProvider from "@/components/providers/transition-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://laclass.dev"),
  title: {
    template: "%s | Landry Bella",
    default: "Landry Bella - Développeur Web",
  },
  description:
    "Développeur Web Full-stack spécialisé en JavaScript/TypeScript avec plus de 5 ans d'expérience. Expert en React, Next.js, Laravel et disposant de solides connaissances en DevOps.",
  referrer: "origin-when-cross-origin",
  creator: "Landry Bella",
  keywords: [
    "laclass dev",
    "Landry Bella",
    "laclass",
    "bellandry",
    "Développeur Web Full-stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Laravel",
    "DevOps",
    "Développement web",
    "Web developer",
    "Full-stack",
    "Programmation",
    "Applications web",
    "API",
    "Frontend",
    "Backend",
    "Node.js",
    "PHP",
    "Git",
    "Docker",
    "Nginx",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "Landry Bella",
    images: {
      url: "/opengraph-image.png",
      alt: "Landry's photo",
    },
  },
  category: "portfolio",
  openGraph: {
    title: "Landry Bella",
    description:
      "Développeur Web Full-stack spécialisé en JavaScript/TypeScript avec plus de 5 ans d'expérience. Expert en React, Next.js, Laravel et disposant de solides connaissances en DevOps.",
    url: "https://laclass.dev",
    siteName: "Landry Bella - Portfolio",
    images: [
      {
        url: "https://laclass.dev/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://laclass.dev/opengraph-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "My custom alt",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`bg-black text-neutral-100 ${inter.className}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
