import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo(): JSX.Element {
  return (
    <motion.div
      drag
      dragConstraints={{ top: -50, bottom: 50, right: 50, left: -50 }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        width={200}
        height={200}
        src="/apple-icon-180x180-dunplab-manifest-37208.png"
      />
    </motion.div>
  );
}
