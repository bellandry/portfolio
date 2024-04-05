import TransitionProvider from "@/components/providers/transition-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Landry Bella",
    default: "Landry Bella - Portfolio"
  },
  description: "Développeur Web Avec plus de 5 années d'expériences professionnelles et une expertise dans un large éventail de technologies",
  keywords: "developer, web-developer, react developer, portfolio, landry, bella, landry Bella, Next.js, Next.js Developer, Laravel, next.js Developer, freelance, développeur web, développeur react, vue.js,",
  twitter: {
    card: "summary",
    creator: "Landry Bella",
    images: ["/hero.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${inter.className}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
