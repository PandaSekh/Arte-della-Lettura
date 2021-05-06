import { ReactNode } from "react";

export default function PostContent({ content }: { content: ReactNode }): JSX.Element {
  return (
    <>
      {content}
      <style jsx>
        {`
					details summary {
						cursor: pointer;
					}

					details summary > * {
						display: inline;
					}
					summary {list - style: none}
					summary::-webkit-details-marker {display: none; }
					details summary::before {
						content:"⚠️";
					}

					ul > li::before {
						content: "";
						position: absolute;
						background-color: #d1d5db;
						border-radius: 50%;
						width: 0.375em;
						height: 0.375em;
						top: calc(0.875em - 0.1875em);
						left: 0.25em;
					}

					ul > li {
						position: relative;
						padding-left: 1.75em;
					}

					ul {
						margin - top: 1.25em;
							margin-bottom: 1.25em;
					}
				`}
      </style>
    </>
  );
}
