"use client"
import BrainElement from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { Mouse } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { id: 1, skill: "Javascript" },
  { id: 2, skill: "TypeScript" },
  { id: 3, skill: "React.js" },
  { id: 4, skill: "Node.js" },
  { id: 5, skill: "Next.js" },
  { id: 6, skill: "PHP" },
  { id: 7, skill: "Laravel" },
  { id: 8, skill: "Symfony" },
  { id: 9, skill: "MySQL" },
  { id: 10, skill: "PostgreSQL" },
  { id: 11, skill: "MongoDB" },
  { id: 12, skill: "Mongoose" },
  { id: 13, skill: "SCSS" },
  { id: 14, skill: "Tailwind CSS" },
  { id: 15, skill: "Framer Motion" }
]

const experiences = [
  { id: 1, title: "Développeur Web Senior", description: "Développe des solutions wed modernes pour les clients externes et les besoins internes de la boite", date: "2023 - Aujourd'hui", company: "Solution Quickdo Canada" },
  { id: 2, title: "Directeur Technique", description: "Supervise une équipe de 8 développeurs, optimise le lecteur vidéo et administre le parc informatique de la boite", date: "2021 - 2023", company: "Cinaf TV SA" },
  { id: 3, title: "Développeur Web", description: "Développe l'application Web de streaming et les API pour les application mobiles et TV", date: "2019 - 2021", company: "Cinaf TV SA" },
  { id: 4, title: "Freelance", description: "Travaille à mon propre compte et Développe des applications pour différents clients", date: "2017 - 2019", company: "" },
]

const AboutPage = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const skillRef = useRef(null)
  const isSkillRefInView = useInView(skillRef)
  const experienceRef = useRef(null)
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="flex justify-between h-full overflow-y-scroll overflow-hidden bg-gradient-radial from-gray-950 to-black" ref={containerRef}>
        <div className="p-4 md:p-12 lg:p-20 xl:p-56 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full md:1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biographie</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati numquam architecto dolor molestias tenetur beatae quam. Fuga, dolor temporibus repellendus ex corporis at.</p>
            <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div className="self-end">
              <Image src="/signature.svg" alt="signature" width={200} height={200} />
            </div>
            <div className="h-32 w-24" >
              <Mouse className="h-12 w-12 animate-bounce" />
            </div>
          </div>
          <div className="flex flex-col gap-32 justify-center" ref={skillRef}>
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Compétences
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-3 flex-wrap"
            >
              {skills.map((skill) => (
                <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all" key={skill.id}>{skill.skill}</div>
              ))}
            </motion.div>
            <div className="h-32 w-24" >
              <Mouse className="h-12 w-12 animate-bounce" />
            </div>
          </div>
          <div className="flex flex-col justify-center pb-48" ref={experienceRef}>
            <motion.h1
              className="font-bold text-2xl py-8"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Expérience
            </motion.h1>
            {experiences.map((experience) => (
              <div className={`flex justify-between w-full ${experience.id % 2 === 0 && "flex-row-reverse"}`} key={experience.id}>
                <div className="w-2/5 flex flex-col gap-2 ">
                  <h2 className="text-lg md:text-2xl font-semibold bg-gray-900 rounded-md p-1 md:p-4">{experience.title}</h2>
                  <p className="md:text-lg">
                    {experience.description}
                  </p>
                  <p className="text-gray-600 p-3 text-sm font-semibold">
                    {experience.date}
                  </p>
                  {experience.company && (
                    <p className="bg-gray-900 text-sm rounded-md font-semibold p-1 w-fit">
                      {experience.company}
                    </p>
                  )}
                </div>
                <div className="w-1/5 flex flex-col items-center">
                  <div className="w-1 h-full bg-gray-500 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-900 bg-black -left-2"></div>
                  </div>
                </div>
                <div className="w-2/5">

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:w-1/2 md:sticky top-0 z-30 md:block right-0 h-full ">
          <BrainElement scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;