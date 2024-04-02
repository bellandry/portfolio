import { Facebook, Gitlab, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <>
      <Link target="_blank" className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="https://gitlab.com/bellandry.work">
        <Gitlab className="w-6 h-6" />
      </Link>
      <Link target="_blank" className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="https://linkedin.com/in/bellandry">
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link target="_blank" className="hover:text-black hover:bg-white rounded-md p-1 transition-all" href="https://facebook.com/LaclassWebDev">
        <Facebook className="w-6 h-6" />
      </Link>
    </>
  );
}

export default SocialMedias;