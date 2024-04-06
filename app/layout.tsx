import TransitionProvider from "@/components/providers/transition-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://laclass.dev"),
  title: {
    template: "%s | Landry Bella",
    default: "Landry Bella - Portfolio"
  },
  description: "Développeur Web Avec plus de 5 années d'expériences professionnelles et une expertise dans un large éventail de technologies",
  keywords: "laclass dev, laclass, bellandry, developer, web-developer, react developer, portfolio, landry, bella, landry Bella, Next.js, Next.js Developer, Laravel, next.js Developer, freelance, développeur web, développeur react, vue.js, landry portfolio, laravel, symfony, vue.js, ",
  twitter: {
    card: "summary_large_image",
    creator: "Landry Bella",
    images: {
      url: "/hero.png",
      alt: "Landry's photo"
    }
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`bg-black text-white ${inter.className}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
