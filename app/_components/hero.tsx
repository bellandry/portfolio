import { Facebook, Gitlab, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="h-full flex flex-col px-4 md:px-12 lg:px-20 xl:px-56 md:gap-x-10 md:flex-row-reverse py-8">
      <div className="h-1/2 md:h-full md:w-2/5 relative">
        <Image src="/hero.png" alt="photo de Bellandry" fill className="object-contain" />
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center md:h-full md:w-3/5 md:items-start">
        <p className="text-xl font-bold pb-4"> - Landry BELLA - </p>
        <div className="flex flex-col gap-4 md:gap-12">
          <h1 className="text-4xl font-bold md:text-6xl text-center md:text-start">Développeur Web Fullstack</h1>
          <p className="md:text-xl text-center md:text-left">Hello ! Je suis Landry Bella, Expert en développement web et passioné de développement mobile, basé au Cameroun</p>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <button className="p-4 rounded-md ring-1 ring-white bg-white text-black hover:bg-black hover:text-white transition-all">Mes réalisations</button>
            <button className="p-4 rounded-md ring-1 ring-white hover:bg-white hover:text-black transition-all">Me contacter</button>
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <Link className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="#">
              <Gitlab className="w-6 h-6" />
            </Link>
            <Link className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="#">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="#">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;