import { motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect } from "react";

export default function Stars({
  rating,
  className,
}: {
  rating: number | string;
  className?: string;
}): ReactElement | null {
  const ratingNumber =
    typeof rating === "number" ? rating : Number.parseInt(rating, 10);

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: [0, 1],
      rotate: [270, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "tween",
        delay: i * 0.3,
      },
    }));
    // disabled because this should run only on component mount
    // also follows the docs https://www.framer.com/api/motion/animation/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={`stars flex ${className}`} data-stars={rating}>
      <svg height="25" width="23" className="star rating" data-rating="1">
        <motion.polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 1 ? "#ffd055" : "#d8d8d8"}
          custom={0}
          animate={controls}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="2">
        <motion.polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 2 ? "#ffd055" : "#d8d8d8"}
          custom={1}
          animate={controls}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="3">
        <motion.polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 3 ? "#ffd055" : "#d8d8d8"}
          custom={2}
          animate={controls}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="4">
        <motion.polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 4 ? "#ffd055" : "#d8d8d8"}
          custom={3}
          animate={controls}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="5">
        <motion.polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 5 ? "#ffd055" : "#d8d8d8"}
          custom={4}
          animate={controls}
        />
      </svg>
    </span>
  );
}

Stars.defaultProps = {
  className: "",
};
