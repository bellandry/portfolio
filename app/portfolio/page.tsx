import PortfolioClient from "./client-side";

export const metadata = {
  title: "Mes réalisations",
  description: "Retrouvez ici quelques un de mes derniers travaux. vous pouvez explorer mon gitlab pour en voir plus",
}

const projects = [
  {
    id: 1,
    title: "Remind App",
    description: "Application de productivité de type todoList faite avec Next.js, prisma, Tailwind CSS et Shadcn. Créez vos collections en rapport avec vos objectifs, ajoutez vos taches et trackez votre évolution",
    img: "https://utfs.io/f/b348dbde-ccf5-4daf-8908-d396ff61b651-2lzhzv.png",
    link: "https://remind-app.laclass.dev",
    color: "from-gray-950 to-gray-900"
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Lorem ipsum dolor sit ametF QSTRLorem ipsum dolorSQFSit amet con Lorem ipsum dolor s sd f sdfsFSDF SQFSit amet conLorem ipsum",
    img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-900 to-gray-800"
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Lorem ipsum dolor sit amet SD Lorem ipsum dolor s sd f sQFSit amet con FS DQFSDcon",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-800 to-gray-950"
  },
  {
    id: 4,
    title: "Projet 14",
    description: "Lorem ipsum dolor s sd f sdfsFSDF SQFSit amet conLorem ipsum dolor s sd f sdfsFSDF SQFSit amet con Lorem ipsum dolor",
    img: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://laclass.dev",
    color: "from-gray-950 to-black"
  }
]

const PortfolioPage = () => {
  return (
    <PortfolioClient projects={projects} />
  );
}

export default PortfolioPage;