"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Head from "next/head"

interface PortfolioClientProps {
    projects: {id: number, title: string, description: string, link: string, color: string, img: string }[]
}

const PortfolioClient = ({ projects }: PortfolioClientProps) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-81%"]);

  return (
    <>
    <Head>
      <title> Mes Réalisations</title>
      <meta name="description" content="Retrouvez ici les projets dont je suis le plus fièrt" />
    </Head>
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-48 text-6xl lg:text-8xl bg-gradient-radial from-gray-900 to-black">
          <h1 className="text-center">Mes Réalisations</h1>
          <div className="animate-pulse">
            <Mouse className="w-12 h-12 animate-bounce" />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden mx-auto">
          <motion.div
            style={{ x }}
            className="flex"
          >
            <div className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-950`} />
            {projects.map((project) => (
              <div className={`w-9/12 h-screen flex items-center justify-center border-none bg-gradient-to-r ${project.color}`} key={project.id}>
                <div className="flex flex-col gap-8 p-4 w-3/4 md:w-3/5">
                  <h1 className="text-2xl font-bold md:text-6xl lg:8xl">{project.title}</h1>
                  <div 
                    style={{ backgroundImage: `url(${project.img})`}}
                    className={`w-full h-64 rounded-md bg-cover bg-no-repeat bg-center shadow-gray-900 shadow-lg hover:shadow-gray-800 transition-all`}
                  ></div>
                  <div className="w-96">
                    <p className="w-4/5 md:w-full">{project.description}</p>
                  </div>
                  <Link
                    target="_blank"
                    href={project.link}
                  >
                    <div className="flex justify-end w-full">
                      <button className="ring-1 ring-white p-2 md:p-4 rounded-md hover:bg-white hover:text-black transition-all">
                        Voir la démo
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-radial from-gray-900 to-black">
        <h1 className="text-4xl md:text-8xl">Vous avez un projet ?</h1>
        <div className="relative">
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-72 h-72 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">Développeur web Fullstack et Mobile</textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="ring-1 ring-white w-24 h-24 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >Me Contacter</Link>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default PortfolioClient;