import Stars from "../BookCard/Stars";

export default function InlineStars({
  rating,
  Component,
}: {
  rating: number;
  Component: JSX.Element;
}): JSX.Element {
  return (
    <span className="flex md:flex-row flex-col md:items-center	m-0">
      {Component}
      <Stars className="md:m-3 m-0 stars" rating={rating} />
    </span>
  );
}
