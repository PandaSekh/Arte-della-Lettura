// import { motion } from "framer-motion";
import PostHomepage from "./PostHomepage";

export default function RenderPosts({
  posts,
}: {
  posts: {
    content: string;
    data: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
    filePath: string;
  }[];
}): JSX.Element {
  return (
    <div className="content grid-cols-1 md:grid-cols-2 grid">
      {posts.map((post) => (
        // <motion.article
        //   key={post.data.title}
        //   className="mx-auto my-0 px-6"
        //   initial={{ scale: 1, x: -1000 }}
        //   animate={{ scale: 1, x: 0 }}
        //   transition={{
        //     ease: "easeIn",
        //     duration: 0.7,
        //   }}
        // >
        //   <PostHomepage post={post.content} data={post.data} />
        // </motion.article>
        <article key={post.data.title} className="mx-auto my-0 px-6">
          <PostHomepage post={post.content} data={post.data} />
        </article>
      ))}
    </div>
  );
}
