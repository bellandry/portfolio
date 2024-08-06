"use client";

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
} from "@/components/core/dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getWorkLists } from "../_services";

type workType = {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
  content: string;
  url: string;
};

const PortfolioClient = () => {
  const ref = useRef(null);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getWorks();
  }, []);

  const getWorks = () => {
    getWorkLists().then((response: any) => {
      setWorks(response.workLists);
    });
  };

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "-82%"]);

  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-1000vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-5rem)] text-center flex items-center justify-center flex-col gap-48 text-6xl lg:text-8xl bg-gradient-to-b from-black via-gray-950 to-black">
          <h1>Mes Réalisations</h1>
          <div className="animate-pulse">
            <Mouse className="w-12 h-12 animate-bounce" />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden mx-auto">
          <motion.div style={{ x }} className="flex">
            <div
              className={`w-screen h-screen flex gap-2 items-center justify-center`}
            />
            {works.map((work: workType) => (
              <div
                className={`w-screen max-w-[800px] p-4 md:p-24 h-screen flex items-center border-none ml-4`}
                key={work.id}
              >
                <Dialog
                  transition={{
                    type: "spring",
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <DialogTrigger className="flex flex-col overflow-hidden border border-zinc-50/10 rounded-md">
                    <div className="flex flex-col gap-8 p-2 md:p-4 w-full">
                      <h1 className="text-2xl font-bold  lg:3xl">
                        {work.name}
                      </h1>
                      <DialogImage
                        src={work.image?.url}
                        alt={work.name}
                        className="w-full object-cover aspect-video"
                      />
                      <div className="w-full">
                        <p className="w-full">{work.description}</p>
                      </div>
                      {/* <Link target="_blank" href={`/work/${work.id}`}>
                          <div className="flex justify-end w-full">
                            <button className="ring-1 ring-white p-2 md:p-4 rounded-md hover:bg-white hover:text-black transition-all">
                              En savoir plus
                            </button>
                          </div>
                        </Link> */}
                    </div>
                  </DialogTrigger>
                  <DialogContainer>
                    <DialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900 sm:w-[500px] rounded-md">
                      <DialogImage
                        src={work.image?.url}
                        alt={work.name}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="p-6">
                        <DialogTitle className="text-2xltext-zinc-50">
                          {work.name}
                        </DialogTitle>
                        <DialogSubtitle className="text-zinc-400">
                          {work.description}
                        </DialogSubtitle>
                        <DialogDescription
                          disableLayoutAnimation
                          variants={{
                            initial: { opacity: 0, scale: 0.8, y: 100 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.8, y: 100 },
                          }}
                        >
                          <p className="mt-2 text-zinc-500">{work.content}</p>
                          {work.url && (
                            <a
                              className="mt-2 inline-flex text-zinc-500 underline"
                              href={work.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Voir l&apos;apercu
                            </a>
                          )}
                        </DialogDescription>
                      </div>
                      <DialogClose className="text-zinc-50 bg-slate-700 rounded-full p-1" />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-black via-gray-950 to-black">
        <h1 className="text-3xl md:text-6xl">Vous avez un projet ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-72 h-72 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Développeur Full Stack Web et Mobile
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="ring-1 ring-white w-24 h-24 md:w-32 md:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            Me Contacter
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioClient;
