import Link from "next/link";
import Image from "next/legacy/image";
import { getKey } from "@lib/utils";
import { RelatedPost } from "@fetchers/getRelatedPosts";
import subs from "better-substring";
import { ReactElement } from "react";

function SingleRelatedPost({
  post,
}: {
  post: RelatedPost;
}): ReactElement | null {
  return (
    <div className="max-w-ws mx-auto md:p-2 p-4 h-auto self-end">
      <div>
        <Link href={`/${encodeURIComponent(post.slug)}`}>

          <h3 className="text-center font-normal text-base mb-2 hover:text-customBlue mx-auto max-w-xs">
            {post.title.length > 70
              ? `${subs(post.title, 0, false, 60, false)}...`
              : post.title}
          </h3>

        </Link>
      </div>
      <div className=" m-auto my-2 w-auto h-48 relative transition-opacity opacity-100 hover:opacity-80 mb-0">
        <Link href={`/${encodeURIComponent(post.slug)}`}>

          <Image
            src={post.image}
            loading="lazy"
            alt={post.title}
            layout="fill"
            objectFit="contain"
          />

        </Link>
      </div>
    </div>
  );
}

export default function RenderPosts({
  posts,
}: {
  posts: RelatedPost[];
}): ReactElement | null {
  return (
    <div className="mx-auto my-8 w-full ">
      <p className="mx-auto text-center font-bold	">Post Correlati</p>
      <div className="md:mx-auto my-4 grid md:grid-cols-4 grid-cols-2 shadow-lg mx-4">
        {posts.map((post) => (
          <SingleRelatedPost post={post} key={getKey()} />
        ))}
      </div>
    </div>
  );
}
