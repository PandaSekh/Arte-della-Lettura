import getKey from "../../lib/keyGen";
import PostHomepage from "./PostHomepage";

export default function RenderPosts({ posts }) {
	return (
		<div className="content">
			{posts.map(post => (
				<article key={getKey()}>
					<PostHomepage post={post.content} data={post.data} />
				</article>
			))}
		</div>
	);
}
