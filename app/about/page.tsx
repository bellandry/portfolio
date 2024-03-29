"use client"
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="md:flex justify-between h-full overflow-y-scroll">
        <div className="p-4 md:p-12 lg:p-20 xl:p-56 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biographie</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati numquam architecto dolor molestias tenetur beatae quam. Fuga, dolor temporibus repellendus ex corporis at. Ratione dignissimos harum eum ullam eius.</p>
            <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <div className="self-end">
              <Image src="/signature.svg" alt="signature" width={200} height={200} />
            </div>
            <div className="h-32 w-24" >
              <Mouse className="h-12 w-12 " />
            </div>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Compétences</h1>
            <div className="flex gap-3 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">Javascript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">TypeCript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">Node.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">PostgreSQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">MySQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">SCSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">Tailwind CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-white text-black ring-1 ring-white hover:bg-black hover:text-white transition-all">Framer Motion</div>

            </div>
            <div className="h-32 w-24" >
              <Mouse className="h-12 w-12 " />
            </div>
          </div>
          <div className="flex flex-col justify-center pb-48">
            <h1 className="font-bold text-2xl py-8">Expérience</h1>
            <div className="flex justify-between w-full">
              <div className="w-1/3 flex flex-col gap-2 h-56">
                <h2 className="text-2xl font-semibold bg-gray-900 rounded-md p-4">Développeur Web Senior</h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit eligendi necessitatibus molestias asperiores impedit quia? Suscipit, dolore quia?
                </p>
                <p className="text-gray-600 p-3 text-sm font-semibold">
                  2023 - Aujourd'hui
                </p>
                <p className="bg-gray-900 text-sm rounded-md font-semibold p-1 w-fit">
                  Solution Quickdo Canada
                </p>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="w-1 h-full bg-gray-500 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-900 bg-black -left-2"></div>
                </div>
              </div>
              <div className="w-1/3">

              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="w-1/3 gap-4">

              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="w-1 h-full bg-gray-500 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-900 bg-black -left-2"></div>
                </div>
              </div>
              <div className="w-1/3 flex flex-col gap-2 h-56">
                <h2 className="text-2xl font-semibold bg-gray-900 rounded-md p-4">Directeur Technique</h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit eligendi necessitatibus molestias asperiores impedit quia? Suscipit, dolore quia? S
                </p>
                <p className="text-gray-600 p-3 text-sm font-semibold">
                  2023 - Aujourd'hui
                </p>
                <p className="bg-gray-900 text-sm rounded-md font-semibold p-1 w-fit">
                  Solution Quickdo Canada
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="w-1/3 flex flex-col gap-2 h-56">
                <h2 className="text-2xl font-semibold bg-gray-900 rounded-md p-4">Senior Web Developer</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit eligendi necessitatibus molestias asperiores impedit quia? Suscipit, dolore quia?
                </p>
                <p className="text-gray-600 p-3 text-sm font-semibold">
                  2023 - Aujourd'hui
                </p>
                <p className="bg-gray-900 text-sm rounded-md font-semibold p-1 w-fit">
                  Solution Quickdo Canada
                </p>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <div className="w-1 h-full bg-gray-500 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-900 bg-black -left-2"></div>
                </div>
              </div>
              <div className="w-1/3">

              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden md:block">
          <Image src="/hero.png" alt="photo de Bellandry" fill className="object-contain" />

        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;