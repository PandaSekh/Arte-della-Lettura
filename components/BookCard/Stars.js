export default function Stars({ rating }) {
	return (
		<span className="stars" data-stars={rating}>
			<svg height="25" width="23" className="star rating" data-rating="1">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="2">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="3">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="4">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="5">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<style jsx>
				{`.stars {
					display: flex;
				}
				.stars[data-stars] .star polygon {
					fill: #ffd055;
				}
				.stars[data-stars="1"] .star:nth-child(1) ~ .star polygon {
					fill: #d8d8d8;
				}
				.stars[data-stars="2"] .star:nth-child(2) ~ .star polygon {
					fill: #d8d8d8;
				}
				.stars[data-stars="3"] .star:nth-child(3) ~ .star polygon {
					fill: #d8d8d8;
				}
				.stars[data-stars="4"] .star:nth-child(4) ~ .star polygon {
					fill: #d8d8d8;
				}
				.stars[data-stars="5"] .star:nth-child(5) ~ .star polygon {
					fill: #d8d8d8;
				`}
			</style>
		</span>
	);
}
