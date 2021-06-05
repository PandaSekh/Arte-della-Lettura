import dynamic from "next/dynamic";

export default function PostHomepage({ post, data }: { post: string; data: { [key: string]: any } }): JSX.Element {
  const Link = dynamic(() => import("next/link"));
  const Image = dynamic(() => import("next/image"));
  const DateUnderPost = dynamic(() => import("../Post/DateUnderPost"));
  const ReadMore = dynamic(() => import("./ReadMore"));

  const imageSrc =
    data.category === "Recensioni" ? `/static/images/books/${data.image}` : `/static/images/${data.image}`;

  return (
    <div className="singlePostHomepage m-auto w-11/12 mb-8 grid">
      <Link href={`/${encodeURIComponent(data.slug)}`}>
        <a>
          <h3 className="homepageTitle text-center font-light text-2xl mb-2 hover:text-customBlue mx-auto">
            {data.title}
          </h3>
        </a>
      </Link>
      <DateUnderPost date={data.publishedAt} />
      <div className="homePageImage grid m-auto my-2 w-72 h-80 relative transition-opacity opacity-100 hover:opacity-80">
        <Link href={`/${encodeURIComponent(data.slug)}`}>
          <a>
            <Image src={imageSrc} loading="lazy" alt={data.title} layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
      <p className="extract m-auto max-w-full">
        {data.extract ? data.extract?.slice(0, 400) : post.slice(0, 400)}
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
              margin: auto;
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
