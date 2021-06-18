import Link from "next/link";
import Image from "next/image";
import getKey from "../../lib/keyGen";
import { RelatedPost } from "../../dataFetchers/relatedPostsData";

function SingleRelatedPost({ post }: { post: RelatedPost }): JSX.Element {
  return (
    <div className="max-w-ws mx-auto p-4">
      <Link href={`/${encodeURIComponent(post.slug)}`}>
        <a>
          <h3 className="text-center font-normal text-base mb-2 hover:text-customBlue mx-auto max-w-xs">
            {post.title}
          </h3>
        </a>
      </Link>
      <div className="grid m-auto my-2 w-auto h-48 relative transition-opacity opacity-100 hover:opacity-80 mb-0">
        <Link href={`/${encodeURIComponent(post.slug)}`}>
          <a>
            <Image src={post.image} loading="lazy" alt={post.title} layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function RenderPosts({ posts }: { posts: RelatedPost[] }): JSX.Element {
  return (
    <div className="mx-auto my-8 w-full ">
      <p className="mx-auto text-center font-bold	">Post Correlati</p>
      <div className=" mx-auto my-4 grid md:grid-cols-4 grid-cols-2 shadow-lg">
        {posts.map((post) => (
          <SingleRelatedPost post={post} key={getKey()} />
        ))}
      </div>
    </div>
  );
}
