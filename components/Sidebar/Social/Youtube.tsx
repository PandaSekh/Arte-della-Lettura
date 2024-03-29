import SocialContainer from "./SocialContainer";
import { ReactElement } from "react";

export default function Youtube(): ReactElement | null {
  return (
    <SocialContainer
      social={
        <a href="https://www.youtube.com/channel/UCwy9OpiuWjhZyBcAjuXz02w">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="YouTube"
            role="img"
            aria-roledescription="figure"
            viewBox="0 0 512 512"
            fill="#ed1d24"
          >
            <rect width="512" height="512" rx="15%" />
            <path
              d="m427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174"
              fill="#fff"
            />
            <path d="m220 203v106l93-53" />
          </svg>
        </a>
      }
    />
  );
}
