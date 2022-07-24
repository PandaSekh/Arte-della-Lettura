import { useRouter } from "next/router";
import { createRef } from "react";
import { getKey as keygen } from "@lib/utils";
import config from "website.config.json";
import NavUrl from "./NavUrl";

export default function MobileHeader(): JSX.Element {
  const burgerRef = createRef<HTMLButtonElement>();
  const navRef = createRef<HTMLElement>();
  const router = useRouter();

  function handleMenuClick() {
    if (burgerRef.current && navRef.current) {
      burgerRef.current.classList.toggle("isOpen");
      navRef.current.classList.toggle("isOpen");
      document.body.classList.toggle("lockBody");
    }
  }
  const urls = config.urls.map((url) => (
    <NavUrl
      key={keygen()}
      path={url.path}
      name={url.name}
      router={router}
      onClickFunction={handleMenuClick}
    />
  ));

  return (
    <>
      <button
        ref={burgerRef}
        id="burger"
        className="openMainNav hidden"
        onClick={handleMenuClick}
        type="button"
        aria-label="menu"
      >
        <span className="burger" />
        <style jsx>
          {`
            .burger {
              position: relative;
              display: block;
              width: 28px;
              height: 4px;
              margin: 0 auto;
              background: var(--hamb-color);
              transition: all 0.275s;
            }

            .burger:after,
            .burger:before {
              content: "";
              display: block;
              height: 100%;
              background-color: var(--hamb-color);
              transition: all 0.275s;
            }

            .burger:after {
              transform: translateY(-12px);
            }

            .burger:before {
              transform: translateY(-16px);
            }

            .isOpen .burger {
              transform: translateY(-8px) rotate(-43deg);
              background: #ffffff;
            }

            .isOpen .burger:before {
              transform: translateY(0px) skew(-10deg) rotate(75deg);
              background: #ffffff;
            }

            .isOpen .burger:after {
              transform: translateY(-12px) translateX(10px) skew(-20deg);
              opacity: 0;
            }
            .openMainNav {
              position: absolute;
              top: 15px;
              padding-top: 20px;
              right: 15px;
              z-index: 40;
              background: none;
              border: 0;
              cursor: pointer;
            }
            .openMainNav:focus {
              outline: none;
            }

            @media (max-width: 768px) {
              #burger {
                display: block;
              }
            }
          `}
        </style>
      </button>
      <nav
        className="mobileNav bg-opacity-80 bg-dark-white"
        ref={navRef}
      >
        <ul>{urls}</ul>
        <style jsx global>
          {`
            .mobileNav {
              position: fixed;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              text-align: center;
              opacity: 0;
              z-index: -1;
              visibility: hidden;
              transition: all 0.375s;
            }

            .mobileNav.isOpen {
              opacity: 1;
              z-index: 30;
              visibility: visible;
              overflow: none;
            }

            .mobileNav::before {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: -15px;
              /* background: #018fd9; */
              transform-origin: 0 0;
              transform: skew(-14deg) translateX(-120%);
              transition: all 0.275s 0.1s;
            }

            .mobileNav.isOpen::before {
              transform: skew(-14deg) translateX(0);
            }

            .mobileNav ul {
              display: inline-flex;
              flex-direction: column;
              height: 100%;
              align-items: flex-end;
              justify-content: center;
              transform: translateX(-18%) skew(-16deg);
            }

            .mobileNav li {
              display: block;
              margin: 0.5rem 0;
              text-align: right;
              transform: skew(16deg);
            }

            .mobileNav a {
              opacity: 0;
              transform: translateY(-10px);
            }

            .mobileNav.isOpen a {
              opacity: 1;
              transform: translateY(0);
            }
            .mobileNav li:nth-child(1) a {
              transition: all 275ms 175ms;
            }
            .mobileNav li:nth-child(2) a {
              transition: all 275ms 225ms;
            }
            .mobileNav li:nth-child(3) a {
              transition: all 275ms 275ms;
            }
            .mobileNav li:nth-child(4) a {
              transition: all 275ms 325ms;
            }
            .mobileNav li:nth-child(5) a {
              transition: all 275ms 375ms;
            }

            .mobileNav ul,
            .mobileNav li {
              list-style: none;
              padding: 0;
            }
            .mobileNav a {
              display: block;
              padding-top: 12px;
              color: #ffffff;
              font-size: 2em;
              text-decoration: none;
              font-weight: bold;
            }
          `}
        </style>
      </nav>
    </>
  );
}
