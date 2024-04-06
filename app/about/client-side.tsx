"use client"
import BrainElement from "@/components/brain";
import Signature from "@/components/signature";
import { motion, useInView, useScroll } from "framer-motion";
import { Mouse } from "lucide-react";
import { useRef } from "react";

interface AboutClientProps {
  skills: { id: number, skill: string }[]
  experiences: { id: number, title: string, description: string, date: string, company: string }[]
}

const AboutClient = ({ skills, experiences }: AboutClientProps) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const skillRef = useRef(null)
  const isSkillRefInView = useInView(skillRef)
  const experienceRef = useRef(null)
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}>
        <div className="flex justify-between h-full overflow-y-scroll scroll bg-gradient-radial from-gray-950 to-black" ref={containerRef}>
          <div className="p-4 md:px-12 md:py-10 lg:px-20 lg:py-16 xl:px-56 xl:py-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full md:1/2">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">Biographie</h1>
              <p className="text-md md:text-lg">Passionné par le développement web depuis mes débuts, je suis un développeur Full Stack spécialisé dans les technologies modernes. Expert en JavaScript, TypeScript, Node.js, React, Vue.js, PHP, Laravel et bien d&apos;autres technologies, j&apos;apporte une approche polyvalente et efficace à chaque projet. Avec un engagement envers l&apos;excellence technique et une veille constante des dernières tendances, je suis prêt à transformer vos idées en réalité numérique..</p>
              <span>Citation Favorite : <span className="italic">&quot;Dubito Ergo Sum.&quot;</span></span>
              <div className="self-end w-2/5 md:w-1/5">
                <Signature />
              </div>
              <div className="h-32 w-24 animate-pulse" >
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
              <div className="h-32 w-24 animate-pulse" >
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
    </>
  );
}

export default AboutClient;