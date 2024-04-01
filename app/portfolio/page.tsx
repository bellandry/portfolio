"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortfolioPage = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Lorem ipsum dolor sdsfg sdfgidsf gdst amet cdfg dsfqgdfg on",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://laclass.dev",
      color: "from-black to-gray-950"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Lorem ipsum dolor sit ametF QSTRQfdys dy sd hgfds con",
      img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://laclass.dev",
      color: "from-gray-950 to-gray-800"
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Lorem ipsum dolor sit amet SD FS DQFSDcon",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://laclass.dev",
      color: "from-gray-800 to-gray-950"
    },
    {
      id: 4,
      title: "Projet 14",
      description: "Lorem ipsum dolor s sd f sdfsFSDF SQFSit amet con",
      img: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://laclass.dev",
      color: "from-gray-950 to-black"
    }
  ]

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-[600vh" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-48 text-6xl lg:text-8xl bg-gradient-radial from-gray-950 to-black">
          <h1 className="text-center">Mes Réalisations</h1>
          <MoveDown className="w-12 h-12 animate-bounce" />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <div className="flex">
            {projects.map((project) => (
              <div className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${project.color}`} key={project.id}>
                <div className="flex flex-col gap-6">
                  <h1>{project.title}</h1>
                  <div className="relative">
                    <Image src={project.img} alt={project.title} fill />
                  </div>
                  <p>{project.description}</p>
                  <Link
                    href={project.link}
                  >
                    <button className="ring-1 ring-white p-4 rounded-md hover:bg-white hover:text-black transition-all">
                      Voir la démo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;