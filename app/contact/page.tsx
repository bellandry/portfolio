"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const hello = "Faites un Coucou !"

const ContactPage = () => {
  const [success, setSucccess] = useState(false)
  const [error, setError] = useState(false)

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center p-4 md:px-12 md:py-10 lg:px-20 lg:py-16 xl:px-56 xl:py-40 bg-gradient-to-b from-black to-gray-900">
        <div className="h-1/5 lg:h-full lg:w-1/2 flex flex-col items-center justify-center text-2xl md:text-4xl lg:text-6xl font-semibold">
          <motion.div

          >
            {hello.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))} 👋
          </motion.div>
        </div>
        <form className="h-4/5 lg:h-full w-full lg:w-1/2 bg-gradient-to-l from-black to-gray-900 flex flex-col gap-8 justify-center p-10 md:p-20 rounded-xl">
          <span>Salut Landry, </span>
          <textarea rows={6} className="bg-transparent border-b-2 border-b-gray-600 resize-none outline-none" />
          <span>Mon adresse mail est :</span>
          <input type="email" className="bg-transparent border-b-2 border-b-gray-600 outline-none" />
          <span>Au plaisir de vous lire</span>
          <button className="bg-white ring-1 ring-white text-black rounded-md p-2 font-semibold hover:bg-transparent hover:text-white">Envoyer</button>
          {success && (
            <span className="flex justify-between p-6 ring-1 rounded-md bg-green-200 text-green-900 ring-green-800">Votre Message a bien été envoyé ! <span className="font-bold cursor-pointer px-2 ring-1 rounded-full bg-green-800 text-green-200" onClick={() => setSucccess(!success)}>x</span></span>
          )}
          {error && (
            <span className="flex justify-between p-6 ring-1 rounded-md bg-red-200 text-red-900 ring-red-800">Une erreur inatendue s&apos;est prodite ! <span className="font-bold cursor-pointer px-2 ring-1 rounded-full bg-red-800 text-red-200" onClick={() => setError(!error)}>x</span></span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;