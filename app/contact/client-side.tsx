"use client"
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { CircleX, Loader } from 'lucide-react';
import { useRef, useState } from "react";


const ContactClient = () => {
  const [success, setSucccess] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)

  const form = useRef<HTMLFormElement>(null);
  
  const hello = "Faites un Coucou !"

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError((current) => false)
    setSucccess((current) => false)
    setSending(true)

    if (form.current) {
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "", form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID ?? "",
        })
        .then(
          () => {
            setSucccess((current) => !current)
            if (form.current) form.current.reset()
            setSending(false)
          },
          (error) => {
            setError((current) => !current)
            setSending(false)
          },
        )
    }
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center p-4 md:px-12 md:py-10 lg:px-20 lg:py-16 xl:px-56 xl:py-40 bg-gradient-to-b from-black to-gray-900">
        <div className="h-1/5 md:h-full lg:w-1/2 flex flex-col items-center justify-center text-2xl md:text-4xl lg:text-6xl font-semibold">
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-4/5 md:h-full w-full lg:w-1/2 bg-gradient-to-l from-black to-gray-900 flex flex-col gap-8 justify-center p-10 md:p-20 rounded-xl">
          <label htmlFor='message'>Salut Landry, </label>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-gray-600 resize-none outline-0"
            name="user_message"
            id="message"
            required
          />
          <label htmlFor='email'>Mon adresse mail est :</label>
          <input
            name="user_email"
            type="email"
            id="email"
            className="bg-transparent border-b-2 border-b-gray-600 outline-none"
            required
          />
          <span>Au plaisir de vous lire</span>
          <button className="bg-white ring-1 ring-white text-black rounded-md p-2 font-semibold hover:bg-transparent hover:text-white  flex items-center justify-center gap-8 transition-all" disabled={sending}>
            Envoyer
            {sending && (
              <Loader className='w-4 h-4 animate-spin' />
            )}
          </button>
          {success && (
            <span className="flex justify-between p-6 ring-1 rounded-md bg-green-200 text-green-900 ring-green-800">Votre Message a bien été envoyé ! <CircleX className="font-bold cursor-pointer ring-1 rounded-full bg-green-800 text-green-200" onClick={() => setSucccess(!success)} /></span>
          )}
          {error && (
            <span className="flex justify-between p-6 ring-1 rounded-md bg-red-200 text-red-900 ring-red-800">Une erreur inatendue s&apos;est prodite ! <CircleX className="font-bold cursor-pointer ring-1 rounded-full bg-red-800 text-red-200" onClick={() => setError(!error)} /></span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactClient;