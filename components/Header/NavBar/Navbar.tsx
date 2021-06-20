import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedHeader from "../AnimatedHeader";
import DesktopHeader from "./DesktopHeader";

export default function Navbar(): JSX.Element {
  const MobileHeader = dynamic(() => import("./MobileHeader"));

  return (
    <header>
      <MobileHeader />
      <DesktopHeader />

      <div className="logo max-h-full w-4/6 m-auto lg:w-2/5">
        <Link href="/" aria-label="homepage">
          <a aria-label="homepage">
            <AnimatedHeader />
          </a>
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
          header {
            user-select: none;
          }
        `}
      </style>
    </header>
  );
}
