import { useRouter } from "next/router";
import getKey from "../../lib/keyGen";
import config from "../../website.config.json";

export function PageButton({
  text,
  value,
  currentPage,
  onClickCallback,
}: {
  text: string;
  value: number;
  currentPage: number;
  onClickCallback: (pageNumber: number) => void;
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={() => onClickCallback(value)}
      onKeyPress={() => onClickCallback(value)}
      className={`flex flex-col items-center text-xl m-4 justify-center cursor-pointer text-grayText rounded-md h-11 md: p-0.5 p-2 hover:text-customBlue ${
        value === currentPage ? "underline text-customBlue" : ""
      }`}
    >
      {text}
    </button>
  );
}

export default function Pagination({ totalCount }: { totalCount: number }): JSX.Element {
  const router = useRouter();
  const currentPage = router.query.page ? Number.parseInt(router.query.page as string, 10) : 1;
  const numberOfPages = Math.ceil(totalCount / config.postsPerPage);

  const pageNumberComponent = [];

  function goToPage(pageNumber: number) {
    if (pageNumber === 1) router.push(`/`);
    else router.push(`/pagina/${pageNumber}`);
  }

  pageNumberComponent.push(
    <PageButton key={getKey()} text="<" value={currentPage - 1} currentPage={currentPage} onClickCallback={goToPage} />
  );

  for (let i = currentPage - 2 > 0 ? currentPage - 2 : 1; i < currentPage + 3 && i <= numberOfPages; i++) {
    pageNumberComponent.push(
      <PageButton key={getKey()} text={`${i}`} value={i} currentPage={currentPage} onClickCallback={goToPage} />
    );
  }

  pageNumberComponent.push(
    <PageButton key={getKey()} text=">" value={currentPage + 1} currentPage={currentPage} onClickCallback={goToPage} />
  );

  return (
    <div className="flex justify-center items-center shadow-lg h-16 mx-auto mb-4 rounded-xl bg-white">
      {pageNumberComponent}
    </div>
  );
}
