import { ReactElement } from "react";

export default function Stars({
  rating,
  className,
}: {
  rating: number | string;
  className?: string;
}): ReactElement | null {
  const ratingNumber =
    typeof rating === "number" ? rating : Number.parseInt(rating, 10);

  return (
    <span className={`stars flex ${className}`} data-stars={rating}>
      <svg height="25" width="23" className="star rating" data-rating="1">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 1 ? "#ffd055" : "#d8d8d8"}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="2">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 2 ? "#ffd055" : "#d8d8d8"}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="3">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 3 ? "#ffd055" : "#d8d8d8"}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="4">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 4 ? "#ffd055" : "#d8d8d8"}
        />
      </svg>
      <svg height="25" width="23" className="star rating" data-rating="5">
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          fillRule="nonzero"
          fill={ratingNumber >= 5 ? "#ffd055" : "#d8d8d8"}
        />
      </svg>
    </span>
  );
}

Stars.defaultProps = {
  className: "",
};
