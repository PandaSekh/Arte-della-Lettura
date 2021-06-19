import { motion } from "framer-motion";

export default function ApplePodcast(): JSX.Element {
  return (
    <motion.div
      className="w-10 h-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href="https://podcasts.apple.com/us/podcast/arte-della-lettura-podcast/id1473677332">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="iTunes"
          role="img"
          aria-roledescription="figure"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="url(#t)" />
          <defs>
            <linearGradient id="t" y1="100%" x2="0">
              <stop stopColor="#832bc1" offset="0" />
              <stop offset="1" stopColor="#f452ff" />
            </linearGradient>
          </defs>
          <path
            d="M293 294c-8-8-21-13-37-13s-29 5-37 13c-4 5-6 9-7 15-1 12 0 22 1 39a891 891 0 0 0 13 87c3 9 14 18 30 18 17 0 27-9 30-18a891 891 0 0 0 14-126c-1-6-3-10-7-15zm-79-72a42 42 0 1 0 84 0 42 42 0 0 0-84 0zm42-165a180 180 0 0 0-60 350c2 0 4-1 4-3l-3-18c0-3-2-4-4-5a157 157 0 1 1 126 0c-2 1-4 2-4 5l-3 18c0 2 2 3 4 3a180 180 0 0 0-60-350zm-4 82a98 98 0 0 1 71 169c-2 1-3 4-2 6l-1 20c0 2 2 4 4 2a121 121 0 1 0-136 1c2 1 4-1 4-3v-20c0-2-1-5-3-6a97 97 0 0 1 63-169z"
            fill="#fff"
          />
        </svg>
      </a>
    </motion.div>
  );
}
