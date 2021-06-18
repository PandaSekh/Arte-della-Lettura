import { motion } from "framer-motion";

export default function GoodReads(): JSX.Element {
  return (
    <motion.div className="w-10 h-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a href="https://www.goodreads.com/user/show/82308411-alessio">
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Goodreads" role="img" viewBox="0 0 512 512">
          <rect width="512" height="512" rx="15%" fill="#ece9d4" />
          <path
            d="m380 73h-35v37c-54-75-165-51-196 23-20 48-19 96 2 144 22 50 85 71 135 57 16-3 32-11 43-21 6-5 12-10 16-15-1 19-2 38-5 56-4 23-14 43-36 54-48 25-105 6-126-43h-33c2 32 19 53 46 66 32 16 66 18 100 12 44-7 73-32 83-76 4-16 5-32 6-48 .9-90-.2-173 .2-246zm-40 178c-6 18-17 32-31 42-3 2-20 14-45 15-1 .1-6 .2-11 0-.2 .1-.3 .1-.6 .1-36-2-63-23-75-58-10-29-10-59-3-88 11-43 42-69 81-70 .9-.1 1-.1 1-.1 20-2 36 7 42 9 21 11 37 32 44 61 7 30 8 60-2 89z"
            fill="#814910"
          />
        </svg>
      </a>
    </motion.div>
  );
}
