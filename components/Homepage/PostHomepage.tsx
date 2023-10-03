/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import subs from "better-substring";
import ReadMore from "./ReadMore";
import { ReactElement } from "react";

export default function PostHomepage({
  post,
  data,
  mainPost,
}: {
  post: string;
  data: { [_key: string]: any };
  mainPost?: boolean;
}): ReactElement | null {
  return (
    <div className="singlePostHomepage m-auto w-11/12 mb-8 grid">
      <Link href={`/${encodeURIComponent(data.slug)}`}>
        <a>
          <h3 className="homepageTitle text-center font-light text-2xl mb-2 hover:text-customBlue mx-auto">
            {data.title}
          </h3>
        </a>
      </Link>
      {/* <DateUnderPost date={data.publishedAt} /> */}
      <div className="homePageImage grid m-auto my-2 w-72 h-80 relative transition-opacity opacity-100 hover:opacity-80">
        <Link href={`/${encodeURIComponent(data.slug)}`}>
          <a>
            <Image
              src={`/static/images/${data.image}`}
              loading={mainPost ? "eager" : "lazy"}
              alt={data.title}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <p className="extract m-auto max-w-full">
        {data.extract
          ? subs(data.extract, 0, false, 400, true)
          : subs(post, 0, false, 400, true)}
        ...
      </p>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .homePageImage {
              height: 24rem;
            }
            a,
            .homePageImage {
              width: inherit;
            }
            .extract {
              max-width: 80%;
            }
          }
          .homePageImage {
            height: 28.75rem;
          }
        `}
      </style>
      <ReadMore slug={data.slug} />
    </div>
  );
}

PostHomepage.defaultProps = {
  mainPost: false,
};
