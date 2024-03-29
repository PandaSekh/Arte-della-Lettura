/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextRouter } from "next/router";
import { MouseEventHandler, ReactElement } from "react";
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
}): ReactElement | null {
  return (
    <li className={liClass}>
      <Link
        href={`${path}`}
        prefetch={false}
        onClick={onClickFunction}
        role="link"
        aria-roledescription="link"
        tabIndex={0}
        className={
          router.pathname === `${path}`
            ? `border-b-2 text-customBlue ${extraClass}`
            : `${extraClass}`
        }
      >
        {name}
      </Link>
    </li>
  );
}

NavUrl.defaultProps = {
  liClass: "",
  extraClass: "",
};
