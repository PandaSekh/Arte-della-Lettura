import dynamic from "next/dynamic";

export default function BoldTextWithStars({ text, rating }: { text: string; rating: number }): JSX.Element {
  const Stars = dynamic(() => import("../BookCard/Stars"));
  return (
    <span className="flex flex-row md:items-center	m-0">
      <strong className="mr-2">{text}</strong>
      <Stars rating={rating} />
    </span>
  );
}
