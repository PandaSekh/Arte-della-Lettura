import Link from "next/link";
import Image from "next/legacy/image";
import randomPosts from "../../src/data/random-posts.json";
import { ReactElement } from "react";

export default function RandomPosts(): ReactElement | null {
  const posts = randomPosts.map((post) => (
    <div
      className="lg:w-64 lg:h-72 w-52 h-56 relative my-4 transition-opacity opacity-100 hover:opacity-80"
      key={post.title}
    >
      <Link href={`/${encodeURIComponent(post.slug)}`} prefetch={false}>

        <Image
          src={`/static/images/${post.image}`}
          loading="lazy"
          alt={post.title || "Copertina libro"}
          layout="fill"
          objectFit="contain"
        />

      </Link>
    </div>
  ));
  return <>{posts}</>;
}
