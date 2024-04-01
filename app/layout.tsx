import TransitionProvider from "@/components/providers/transition-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laclass Dev - Portfolio",
  description: "Avec plus de 5 années d'expériences professionnelles, je ne me contente pas de créer des applications, je crée des expériences",
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
