"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
0

const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Lorem ipsum dolor sdsfg sdfgidsf Lorem ipsum dolorSDF SQFSit amet conLorem ipsum dolor",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-950 to-gray-900"
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Lorem ipsum dolor sit ametF QSTRLorem ipsum dolorSQFSit amet con Lorem ipsum dolor s sd f sdfsFSDF SQFSit amet conLorem ipsum",
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-900 to-gray-800"
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Lorem ipsum dolor sit amet SD Lorem ipsum dolor s sd f sQFSit amet con FS DQFSDcon",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-800 to-gray-950"
  },
  {
    id: 4,
    title: "Projet 14",
    description: "Lorem ipsum dolor s sd f sdfsFSDF SQFSit amet conLorem ipsum dolor s sd f sdfsFSDF SQFSit amet con Lorem ipsum dolor",
    img: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-950 to-black"
  }
]

const PortfolioPage = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-81%"]);

  return (
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
                <div className="flex flex-col gap-8 p-4">
                  <h1 className="text-2xl font-bold md:text-6xl lg:8xl">{project.title}</h1>
                  <div className="relative w-auto h-56 md:w-auto md:h-72">
                    <Image src={project.img} alt={project.title} fill className="rounded-md shadow-gray-900 shadow-lg hover:shadow-gray-800 transition-all" />
                  </div>
                  <p className="w-96 text-md">{project.description}</p>
                  <Link
                    href={project.link}
                  >
                    <div className="flex justify-end">
                      <button className="ring-1 ring-white p-4 rounded-md hover:bg-white hover:text-black transition-all">
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
  );
}

export default PortfolioPage;