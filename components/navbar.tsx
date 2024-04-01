"use client"

import NavLinks from "@/app/_components/navlinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Accueil" },
  { url: "/about", title: "A Propos" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0,
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
    }
  }

  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0
    }
  }

  const itemVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-between px-4 md:px-12 lg:px-20 xl:px-56">
      <div>
        <Link
          href="/"
          className="text-md bg-white rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-black mx-2">Laclass</span>
          <span className="bg-black rounded w-12 h-8 items-center flex justify-center">.dev</span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <div className=" text-yellow-50 flex gap-x-4 items-center">
          <NavLinks
            links={links}
          />
        </div>
      </div>
      <button className="hidden md:block px-4 py-3 rounded-md ring-1 ring-white hover:bg-white hover:text-black transition-all">Me contacter</button>
      <div className="md:hidden">
        <button
          className="w-10 h-6 flex flex-col justify-between z-20 relative"
          onClick={() => setOpen((current) => !current)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30
            }}
            className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-radial from-gray-950 to-black flex flex-col text-4xl items-center justify-center">
            <motion.div
              variants={itemVariants}
              className="gap-y-8 flex text-yellow-50 flex-col items-center justify-center"
            >
              <NavLinks
                links={links}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;