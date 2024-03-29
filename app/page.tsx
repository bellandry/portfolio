"use client"

import { motion } from "framer-motion";
import HeroPage from "./_components/hero";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <HeroPage />
    </motion.div>
  );
}
