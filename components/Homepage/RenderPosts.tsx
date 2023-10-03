import PostHomepage from "./PostHomepage";
import { ReactElement } from "react";

export default function RenderPosts({
  posts,
}: {
  posts: {
    content: string;
    data: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [_key: string]: any;
    };
    filePath: string;
  }[];
}): ReactElement | null {
  return (
    <div className="content grid-cols-1 md:grid-cols-2 grid">
      {posts.map((post, i) => (
        <article key={post.data.title} className="mx-auto my-0 px-6">
          <PostHomepage
            post={post.content}
            data={post.data}
            mainPost={i <= 2}
          />
        </article>
      ))}
    </div>
  );
}
