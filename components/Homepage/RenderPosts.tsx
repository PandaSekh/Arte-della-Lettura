import getKey from "../../lib/keyGen";
import PostHomepage from "./PostHomepage";

export default function RenderPosts({ posts }: {
	posts: {
		content: string
		data: {
			[key: string]: any;
		}
		filePath: string
	}[]
}) {
	return (
		<div className="content grid-cols-1 md:grid-cols-2 grid">
			{posts.map(post => (
				<article key={getKey()} className="mx-auto my-0">
					<PostHomepage post={post.content} data={post.data} />
				</article>
			))}
		</div>
	);
}
