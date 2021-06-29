import Book from "@interfaces/Book";
import Logo from "./Logo";
import RandomPosts from "./RandomPosts";
import Instagram from "./Logos/Instagram";
import Spotify from "./Logos/Spotify";
import GoodReads from "./Logos/GoodReads";
import Youtube from "./Logos/Youtube";
import ApplePodcast from "./Logos/ApplePodcast";
import SearchInput from "./SearchInput";

export default function Sidebar({
  randomPosts,
}: {
  randomPosts: Array<Book>;
}): JSX.Element {
  return (
    <div className="sidebar hidden w-10/12 lg:flex flex-col items-center max-w-min">
      <div className="flex flex-col items-center">
        <SearchInput />
        <p className="text-2xl font-light ">Chi Sono</p>
        <Logo />
        <p className="text-base text-center">
          Ciao, sono Alessio e su questo blog parlo di libri e fumetti. I miei
          generi preferiti sono distopico, fantasy e narrativa di viaggio. Buona
          lettura!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-light">Social</p>
        <div className="flex flex-row gap-2 mb-4 flex-wrap items-center">
          <Spotify />
          <ApplePodcast />
          <GoodReads />
          <Youtube />
          <Instagram />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-light">Recensioni Casuali</p>
        <RandomPosts randomBooks={randomPosts} />
      </div>
    </div>
  );
}
