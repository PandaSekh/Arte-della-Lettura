import { useEffect, useRef } from "react";

export default function DarkModeButton(): JSX.Element {
  let isDark = true;
  const htmlTag = document.querySelector("html");
  let overlay = document.querySelector("#overlay");
  const overlayRef = useRef(null);

  if (typeof window !== "undefined" && htmlTag && overlay) {
    isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      htmlTag.classList.add("dark");
      overlay.classList.add("mooned");
    }
    document.documentElement.style.setProperty(
      "--hamb-color",
      isDark ? "#FFFFFF" : "#3a3a3a"
    );
    document.documentElement.style.setProperty(
      "--header-bg-color",
      isDark ? "#3a3a3a" : "#ffffff"
    );
  }

  function toggleDarkMode() {
    if (htmlTag && overlay) {
      isDark = !isDark;
      htmlTag.classList.toggle("dark");
      overlay.classList.toggle("mooned");
      document.documentElement.style.setProperty(
        "--hamb-color",
        isDark ? "#FFFFFF" : "#3a3a3a"
      );
      localStorage.setItem("theme", isDark ? "dark" : "");
    }
  }

  useEffect(() => {
    overlay = document.querySelector("#overlay");
    if (typeof window !== "undefined" && htmlTag && overlay) {
      isDark = localStorage.getItem("theme") === "dark";
      if (isDark) {
        htmlTag.classList.add("dark");
        overlay.classList.add("mooned");
      }
      document.documentElement.style.setProperty(
        "--hamb-color",
        isDark ? "#FFFFFF" : "#3a3a3a"
      );
      document.documentElement.style.setProperty(
        "--header-bg-color",
        isDark ? "#3a3a3a" : "#ffffff"
      );
    }
  }, [overlayRef]);

  return (
    <div
      onClick={toggleDarkMode}
      onKeyPress={toggleDarkMode}
      aria-label="switch"
      role="switch"
      aria-checked="mixed"
      aria-roledescription="switch"
      tabIndex={0}
      className="switch rounded-full h-8 w-16 bg-dark-black dark:bg-customBlue absolute right-8 top-4 shadow-2xl hover:ring ring-customBlue ring-opacity-50"
    >
      <div
        className="ball  w-6 h-6 rounded-full absolute top-1 left-1.5 transform transition-all dark:translate-x-7 duration-500 ease-in-out"
      >
        <svg
          id="sunmoon"
          viewBox="0 0 100 100"
          aria-hidden="true"
          aria-labelledby="sunmoon-title"
        >
          <title id="sunmoon-title">Simbolo sole e luna per Dark Mode</title>
          <defs>
            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              <circle
                ref={overlayRef}
                id="overlay"
                r="60"
                cx="185"
                cy="-75"
                fill="black"
              />
            </mask>

            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>

          <g filter="url(#blur)">
            <circle
              fill="gold"
              id="donut"
              r="45"
              cx="50"
              cy="50"
              mask="url(#hole)"
            />
          </g>
        </svg>
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .switch {
              transform: translate(-200%);
            }
            .switch.isOpen {
              transform: translateY(0%);
              transition: all 0.375s;
            }
          }
          svg .mooned {
            transform: translate(-90px, 90px);
          }
          svg #overlay {
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
