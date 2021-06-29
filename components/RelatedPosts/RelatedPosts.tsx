import Link from "next/link";
import Image from "next/image";
import { getKey } from "@lib/utils";
import { RelatedPost } from "@fetchers/getRelatedPosts";
import subs from "better-substring"

function SingleRelatedPost({ post }: { post: RelatedPost }): JSX.Element {
  return (
    <div className="max-w-ws mx-auto md:p-2 p-4 h-auto self-end">
      <div>
        <Link href={`/${encodeURIComponent(post.slug)}`}>
          <a>
            <h3 className="text-center font-normal text-base mb-2 hover:text-customBlue mx-auto max-w-xs">
              {/* TODO avoid trimmig mid-word */}
              {post.title.length > 70 ? `${subs(post.title, 0, false, 60, false)}...` : post.title}
            </h3>
          </a>
        </Link>
      </div>
      <div className=" m-auto my-2 w-auto h-48 relative transition-opacity opacity-100 hover:opacity-80 mb-0">
        <Link href={`/${encodeURIComponent(post.slug)}`}>
          <a>
            <Image
              src={post.image}
              loading="lazy"
              alt={post.title}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function RenderPosts({
  posts,
}: {
  posts: RelatedPost[];
}): JSX.Element {
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
