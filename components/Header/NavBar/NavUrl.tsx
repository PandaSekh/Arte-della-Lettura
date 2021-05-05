import { NextRouter } from "next/router";
import { MouseEventHandler } from "react";
import Link from "next/link";

export default function NavUrl({
  path,
  name,
  extraClass,
  liClass,
  onClickFunction,
  router,
}: {
  liClass?: string;
  path: string;
  name: string;
  extraClass?: string;
  onClickFunction?: MouseEventHandler<HTMLAnchorElement>;
  router: NextRouter;
}) {
  return (
    <li className={liClass || ""}>
      <Link href={`${path}`} prefetch={false}>
        <a
          onClick={onClickFunction}
          className={
            router.pathname == `${path}` ? `border-b-2 text-customBlue ${extraClass || ""}` : `${extraClass || ""}`
          }
        >
          {name}
        </a>
      </Link>
    </li>
  );
}
