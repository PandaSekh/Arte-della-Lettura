import Stars from "./Stars";

export default function InlineStars({
  rating,
  Component,
  type,
}: {
  rating: number;
  Component: JSX.Element;
  type: "book";
}): JSX.Element {
  const emoji = type === "book" ? "📚" : "📺";
  return (
    <span className="flex md:flex-row flex-col md:items-center m-0 gap-2">
      <div>{emoji} {Component}</div>
      <Stars className="m-0 stars" rating={rating} />
    </span>
  );
}
