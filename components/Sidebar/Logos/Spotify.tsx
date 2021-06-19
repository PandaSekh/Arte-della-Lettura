import { motion } from "framer-motion";

export default function Instagram(): JSX.Element {
  return (
    <motion.div
      className="w-10 h-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href="https://open.spotify.com/show/2yre1D5uOEIHFh0UcNyoTu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Spotify"
          role="img"
          aria-roledescription="figure"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="#3bd75f" />
          <circle cx="256" cy="256" fill="#fff" r="192" />
          <g fill="none" stroke="#3bd75f" strokeLinecap="round">
            <path d="m141 195c75-20 164-15 238 24" strokeWidth="36" />
            <path d="m152 257c61-17 144-13 203 24" strokeWidth="31" />
            <path d="m156 315c54-12 116-17 178 20" strokeWidth="24" />
          </g>
        </svg>
      </a>
    </motion.div>
  );
}
