/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
}): JSX.Element {
  return (
    <li className={liClass}>
      <Link href={`${path}`} prefetch={false}>
        <a
          onClick={onClickFunction}
          role="link"
          tabIndex={0}
          className={router.pathname === `${path}` ? `border-b-2 text-customBlue ${extraClass}` : `${extraClass}`}
        >
          {name}
        </a>
      </Link>
    </li>
  );
}

NavUrl.defaultProps = {
  liClass: "",
  extraClass: "",
  onClickFunction: () => {},
};
