import Stars from "./Stars";
import { ReactElement } from "react";

export default function BoldTextWithStars({
  text,
  rating,
}: {
  text: string;
  rating: number;
}): ReactElement | null {
  return (
    <span className="flex flex-row md:items-center	m-0">
      <strong className="mr-2">{text}</strong>
      <Stars rating={rating} />
    </span>
  );
}
