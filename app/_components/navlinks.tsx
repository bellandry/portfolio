"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  links: { url: string, title: string }[]
}

const NavLinks = ({ links }: NavLinksProps) => {
  const pathName = usePathname()

  const linkVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }


  return (
    <>
      {links.map((link) => (
        <motion.div
          key={link.title}
          variants={linkVariants}
        >
          <Link
            className={`rounded py-1 px-2 font-semibold hover:bg-white hover:text-black transition-all
            ${pathName == link.url && "bg-white text-black"}`}
            href={link.url}
          >
            {link.title}
          </Link>
        </motion.div>
      ))}
    </>
  )
}

export default NavLinks;