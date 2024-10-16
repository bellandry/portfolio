"use client";

import NavLinks from "@/app/_components/navlinks";
import SocialMedias from "@/app/_components/social-medias";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: "/", title: "Accueil" },
  { url: "/about", title: "A Propos" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 50,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -50,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
  };

  const itemVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-full w-screen flex items-center justify-between px-4 md:container">
      <div>
        <Link
          href="/"
          className="text-md bg-white rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-black mx-2">Laclass</span>
          <span className="bg-black rounded w-12 h-8 items-center flex justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex">
        <div className=" text-yellow-50 flex gap-x-4 items-center">
          <NavLinks links={links} />
        </div>
      </div>
      <div className="hidden md:flex gap-4 items-center justify-center md:justify-start">
        <SocialMedias />
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-6 flex flex-col justify-between z-40 relative"
          onClick={() => setOpen((current) => !current)}
          aria-label="toggle button"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className="absolute z-30 top-0 left-0 bottom-0 w-full h-full flex flex-col text-4xl items-center justify-center backdrop-blur-md bg-gradient-radial from-slate-950/30 to-black"
          >
            <motion.div
              variants={itemVariants}
              className="gap-y-8 flex text-yellow-50 flex-col items-center justify-center"
            >
              <NavLinks links={links} />
              <div className="flex items-center gap-8 mt-12">
                <SocialMedias />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
