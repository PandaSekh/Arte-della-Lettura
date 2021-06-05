import { GetStaticProps } from "next";
import Statistics from "../interfaces/Statistics";
// import getStatistics from "../lib/bookStatsCalculator";

export default function Statistiche({ stats }: { stats: Statistics }): JSX.Element {
  return <p>{stats.totalBooks}</p>;
}

export const getStaticProps: GetStaticProps = async () => {
  const stats = null;
  // const stats = getStatistics();

  return {
    props: {
      stats,
    },
  };
};
