import { GetStaticProps } from "next";
import getStatistics from "../lib/bookStatsCalculator"

export default function Statistiche({ stats }: { stats: any }) {
  return <p>{stats.totalBooks}</p>;
}

export const getStaticProps: GetStaticProps = async () => {
  const stats = getStatistics();
  console.log(stats)

  return {
    props: {
      stats: stats
    },
  };
};