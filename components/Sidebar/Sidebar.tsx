import Book from "@interfaces/Book";
import Logo from "./Logo";
import RandomPosts from "./RandomPosts";
import Instagram from "./Social/Instagram";
import Spotify from "./Social/Spotify";
import GoodReads from "./Social/GoodReads";
import Youtube from "./Social/Youtube";
import ApplePodcast from "./Social/ApplePodcast";
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
        <h4 className="text-2xl font-light ">Chi Sono</h4>
        <Logo />
        <p className="text-base text-center">
          Ciao, sono Alessio e su questo blog parlo di libri e fumetti. I miei
          generi preferiti sono distopico, fantasy e narrativa di viaggio. Buona
          lettura!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-light">Social</h4>
        <div className="flex flex-row gap-2 mb-4 flex-wrap items-center">
          <Spotify />
          <ApplePodcast />
          <GoodReads />
          <Youtube />
          <Instagram />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-light">Recensioni Casuali</h4>
        <RandomPosts randomBooks={randomPosts} />
      </div>
    </div>
  );
}
