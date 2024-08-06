import PortfolioClient from "./client-side";

export const metadata = {
  title: "Mes réalisations",
  description:
    "Retrouvez ici quelques un de mes derniers travaux. vous pouvez explorer mon gitlab pour en voir plus",
};

const PortfolioPage = () => {
  return <PortfolioClient />;
};

export default PortfolioPage;
