import { Facebook, Gitlab, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <>
      <Link
        target="_blank"
        className="hover:text-black hover:bg-white rounded-md p-1 transition-all"
        href="https://gitlab.com/bellandry.work"
        aria-label="gitlab"
      >
        <Gitlab className="w-6 h-6" aria-label="Gitlab" />
      </Link>
      <Link
        target="_blank"
        className="hover:text-black hover:bg-white rounded-md p-1 transition-all"
        href="https://linkedin.com/in/bellandry"
        aria-label="linkedin"
      >
        <Linkedin className="w-6 h-6" aria-label="Linkedin" />
      </Link>
      <Link
        target="_blank"
        className="hover:text-black hover:bg-white rounded-md p-1 transition-all"
        href="https://facebook.com/LaclassWebDev"
        aria-label="facebook"
      >
        <Facebook className="w-6 h-6" aria-label="Facebook" />
      </Link>
    </>
  );
};

export default SocialMedias;
