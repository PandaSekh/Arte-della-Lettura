import Image from "next/image";
// import { motion } from "framer-motion";
import panda from "../../public/apple-icon-180x180-dunplab-manifest-37208.png"

export default function Logo(): JSX.Element {
  return (
    // <motion.div
    //   drag
    //   dragConstraints={{ top: -50, bottom: 50, right: 50, left: -50 }}
    //   whileHover={{ scale: 1 }}
    //   whileTap={{ scale: 0.9 }}
    // >
    //   <Image
    //     width={200}
    //     height={200}
    //     src={panda}
    //     placeholder="empty"
    //     alt="Mascotte Arte della Lettura"
    //   />
    // </motion.div>
    <div>
      <Image
        width={200}
        height={200}
        src={panda}
        placeholder="empty"
        alt="Mascotte Arte della Lettura"
      />
    </div>
  );
}
