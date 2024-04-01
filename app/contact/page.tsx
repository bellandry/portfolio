"use client"
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-2xl">En cours de développement...</p>
      </div>
    </motion.div>
  );
}

export default ContactPage;