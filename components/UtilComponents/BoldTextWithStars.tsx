import Stars from "../BookCard/Stars";

export default function BoldTextWithStars({
  text,
  rating,
}: {
  text: string;
  rating: number;
}): JSX.Element {
  return (
    <span className="flex flex-row md:items-center	m-0">
      <strong className="mr-2">{text}</strong>
      <Stars rating={rating} />
    </span>
  );
}
