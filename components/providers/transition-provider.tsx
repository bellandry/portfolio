"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactElement, ReactNode } from 'react';
import Navbar from "../navbar";

const TransitionProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-full h-screen">
        <motion.div
          className="h-screen w-screen fixed bg-gradient-radial bg-fixed from-gray-950 to-black rounded-b-[100px] top-0 z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        > </motion.div>
        <motion.div
          className="h-full w-full fixed bg-gradient-radial bg-fixed from-gray-950 to-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.1 } }}
        > </motion.div>
        <div className="h-[64px]">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;