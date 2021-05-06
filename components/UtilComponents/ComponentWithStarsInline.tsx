import dynamic from "next/dynamic";

export default function InlineStars({ rating, Component }: { rating: number; Component: JSX.Element }): JSX.Element {
  const Stars = dynamic(() => import("../BookCard/Stars"));
  return (
    <span>
      {Component}
      <Stars className="m-3" rating={rating} />
      <style jsx>
        {`
          span {
            display: flex;
            align-items: center;
            margin: 0px;
          }
        `}
      </style>
    </span>
  );
}
