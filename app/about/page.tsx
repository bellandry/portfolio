import { experiences, skills } from "@/constants";
import AboutClient from "./client-side";

export const metadata = {
  title: "A Propos",
  description:
    "Passionné par le développement web depuis mes débuts, je suis un développeur Full Stack spécialisé dans les technologies modernes. Expert en JavaScript, TypeScript, Node.js, React, Vue.js, PHP, Laravel et bien d&apos;autres technologies, j&apos;apporte une approche polyvalente et efficace à chaque projet. Avec un engagement envers l&apos;excellence technique et une veille constante des dernières tendances, je suis prêt à transformer vos idées en réalité numérique..",
};

const AboutPage = () => {
  return <AboutClient skills={skills} experiences={experiences} />;
};

export default AboutPage;
