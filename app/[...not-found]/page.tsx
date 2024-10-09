import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-b from-black via-slate-900 to-slate-950">
      <h1 className="text-6xl font-bold text-neutral-300">404</h1>
      <p className="mt-4 text-lg text-gray-300">
        Désolé, la page que vous cherchez n&apos;existe pas.
      </p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 text-white bg-transparent rounded-md hover:bg-neutral-100 hover:text-black ring-1 ring-neutral-200 transition">
          Retourner à la page d&apos;accueil
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
