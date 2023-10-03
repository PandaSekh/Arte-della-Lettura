import { ReactElement } from "react";
import Stars from "./Stars";

export default function InlineStars({
  rating,
  Component,
}: {
  rating: number;
  Component: ReactElement | null;
}): ReactElement | null {
  return (
    <span className="flex md:flex-row flex-col md:items-center	m-0">
      {Component}
      <Stars className="md:m-3 m-0 stars" rating={rating} />
    </span>
  );
}
