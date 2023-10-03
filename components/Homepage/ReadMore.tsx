import Link from "next/link";
import { ReactElement } from "react";

export default function ReadMore({
  slug,
}: {
  slug: string;
}): ReactElement | null {
  return (
    <div className="text-dark-black readMoreButton text-center m-auto w-max p-3 bg-customBlue hover:bg-customBlue-light mt-4 rounded ease-in-out duration-300 cursor-pointer ">
      <Link href={`/${encodeURIComponent(slug)}`}>
        <a aria-label="Leggi il post completo" className="text-white font-bold">
          Continua a leggere
        </a>
      </Link>
      <style jsx>{`
        @media (max-width: 768px) {
          .readMoreButton {
            width: inherit;
          }
        }
      `}</style>
    </div>
  );
}
