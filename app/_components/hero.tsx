import hero from "@/public/hero.png";
import Image from "next/image";
import Link from "next/link";
import SocialMedias from "./social-medias";

const HeroPage = () => {
  return (
    <div className="h-full flex flex-col px-4 md:container md:gap-x-10 md:flex-row-reverse py-8 justify-between">
      <div className="h-2/5 md:h-full md:w-2/5 lg:w-1/2 relative">
        <Image
          src={hero}
          alt="photo de Bellandry"
          fill
          className="object-contain"
        />
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center md:h-full md:w-3/5 lg:w-1/2 md:items-start">
        <p className="text-sm lg:text-xl font-bold pb-1 md:pb-4">
          {" "}
          - Landry BELLA -{" "}
        </p>
        <div className="flex flex-col gap-4 lg:gap-12">
          <h1 className="text-4xl font-bold lg:text-6xl text-center md:text-start">
            Développeur Web Full-stack
          </h1>
          <p className="text-sm md:text-md lg:text-xl text-center md:text-left">
            Avec plus de 5 ans d&apos;expérience, je crée des applications web
            performantes en JavaScript, TypeScript, React, Next.js et Laravel.
            Mon expertise en DevOps me permet de garantir des solutions robustes
            et scalables adaptées aux besoins de mes clients.
          </p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <Link href="/portfolio">
              <button className="p-3 md:p-4 rounded-md ring-1 ring-white bg-white text-black hover:bg-black hover:text-white transition-all">
                Découvrir mes projets
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 md:p-4 rounded-md ring-1 ring-white hover:bg-white hover:text-black transition-all">
                On se parle ?
              </button>
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <SocialMedias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
