export default function RelatedPosts(props) {
	const post = props.post;
	const posts = props.posts;
}

function getRelatedPosts(post, posts, amount) {}

function getSimilarityPoints(mainPost, targetPost) {
	const tagPoint = 1;
	const catPoint = 1;

	let points = 0;

	if (mainPost.category === targetPost.category) {
		points += catPoint;
	}

	points += mainPost.tags.map(tag => {
		let tagPoints = 0;
		targetPost.tags.forEach(targetTag => {
			tagPoints += targetTag === tag ? tagPoint : 0;
		});
		return tagPoints;
	});

	return points;
}
