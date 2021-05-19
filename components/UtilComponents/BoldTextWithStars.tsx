import dynamic from "next/dynamic";

export default function BoldTextWithStars({ text, rating }: { text: string; rating: number }): JSX.Element {
  const Stars = dynamic(() => import("../BookCard/Stars"));
  return (
    <span>
      <strong>{text}</strong>
      <Stars rating={rating} />
      <style jsx>
        {`
          span {
            display: flex;
            align-items: center;
            margin: 0px;
          }
          strong {
            margin-right: 0.5rem;
          }
        `}
      </style>
    </span>
  );
}
