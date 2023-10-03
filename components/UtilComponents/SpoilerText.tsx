/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactElement, useState } from "react";

export default function Spoiler({
  text,
}: {
  text: string;
}): ReactElement | null {
  const [showSpoiler, setShowSpoiler] = useState(false);
  return (
    <span className="wrapper">
      <span className="clickMeText">⚠️ CLICCA PER MOSTRARE SPOILER ⚠️</span>
      <p
        onKeyPress={() => setShowSpoiler(true)}
        onClick={() => setShowSpoiler(true)}
        className="spoiler"
      >
        {text}
      </p>
      <style jsx>
        {`
          .spoiler {
            filter: blur(${showSpoiler ? 0 : "0.5"}rem);
            user-select: ${showSpoiler ? "unset" : "none"};
          }
          .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wrapper:hover {
            cursor: ${showSpoiler ? "cursor" : "pointer"};
          }
          .clickMeText {
            position: absolute;
            display: ${showSpoiler ? "none" : "block"};
            padding: 10px;
            border-radius: 5px;
            background-color: #3a3a3a;
            color: #fefefe;
          }
        `}
      </style>
    </span>
  );
}
