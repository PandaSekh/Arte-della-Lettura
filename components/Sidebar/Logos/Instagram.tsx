import { motion } from "framer-motion";

export default function Instagram(): JSX.Element {
  return (
    <motion.div
      className="w-10 h-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href="https://www.instagram.com/arte_della_lettura/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Instagram"
          role="img"
          aria-roledescription="figure"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" id="b" />
          <use fill="url(#a)" xlinkHref="#b" />
          <use fill="url(#c)" xlinkHref="#b" />
          <radialGradient id="a" cx=".4" cy="1" r="1">
            <stop offset=".1" stopColor="#fd5" />
            <stop offset=".5" stopColor="#ff543e" />
            <stop offset="1" stopColor="#c837ab" />
          </radialGradient>
          <linearGradient id="c" x2=".2" y2="1">
            <stop offset=".1" stopColor="#3771c8" />
            <stop offset=".5" stopColor="#60f" stopOpacity="0" />
          </linearGradient>
          <g fill="none" stroke="#fff" strokeWidth="30">
            <rect width="308" height="308" x="102" y="102" rx="81" />
            <circle cx="256" cy="256" r="72" />
            <circle cx="347" cy="165" r="6" />
          </g>
        </svg>
      </a>
    </motion.div>
  );
}
