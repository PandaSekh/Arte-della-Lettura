import Link from "next/link";
import dynamic from "next/dynamic";
import SvgHeader from "../SvgHeader";
import DesktopHeader from "./DesktopHeader";
import { ReactElement } from "react";

export default function Navbar(): ReactElement | null {
  const MobileHeader = dynamic(() => import("./MobileHeader"));

  return (
    <header className="select-none ">
      <MobileHeader />
      <DesktopHeader />

      <div className="logo max-h-full w-4/6 m-auto lg:w-2/5">
        <Link href="/" aria-label="homepage">
          <SvgHeader />
        </Link>
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .logo {
              margin: -50px 5%;
            }
            header {
              grid-template-columns: 6fr 1fr;
            }
          }

          @media (max-width: 550px) {
            .logo {
              width: 66.66%;
            }
          }
        `}
      </style>
    </header>
  );
}
