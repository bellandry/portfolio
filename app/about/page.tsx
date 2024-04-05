import AboutClient from "./client-side";

export const metadata = {
  title: "A Propos",
  description: "Passionné par le développement web depuis mes débuts, je suis un développeur Full Stack spécialisé dans les technologies modernes. Expert en JavaScript, TypeScript, Node.js, React, Vue.js, PHP, Laravel et bien d&apos;autres technologies, j&apos;apporte une approche polyvalente et efficace à chaque projet. Avec un engagement envers l&apos;excellence technique et une veille constante des dernières tendances, je suis prêt à transformer vos idées en réalité numérique..",
}

const skills = [
  { id: 1, skill: "Javascript" },
  { id: 2, skill: "TypeScript" },
  { id: 3, skill: "React.js" },
  { id: 17, skill: "VueJS" },
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
  { id: 15, skill: "Framer Motion" },
  { id: 16, skill: "Git" }
]

const experiences = [
  { id: 1, title: "Développeur Web Senior", description: "Développe des solutions wed modernes pour les clients externes et les besoins internes de la boite", date: "2023 - Aujourd'hui", company: "Solution Quickdo Canada" },
  { id: 2, title: "Directeur Technique", description: "Supervise une équipe de 8 développeurs, optimise le lecteur vidéo et administre le parc informatique de la boite", date: "2021 - 2023", company: "Cinaf TV SA" },
  { id: 3, title: "Développeur Web", description: "Développe l'application Web de streaming et les API pour les application mobiles et TV", date: "2019 - 2021", company: "Cinaf TV SA" },
  { id: 4, title: "Freelance", description: "Travaille à mon propre compte et Développe des applications pour différents clients", date: "2017 - 2019", company: "" },
]

const AboutPage = () => {

  return (
    <AboutClient skills={skills} experiences={experiences} />
  );
}

export default AboutPage;