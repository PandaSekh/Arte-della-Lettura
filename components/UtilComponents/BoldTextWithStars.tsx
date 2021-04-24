import Stars from "../BookCard/Stars"

export default function BoldTextWithStars({ text, rating }: { text: string, rating: number }) {
	return (
		<p>
			<strong>
				{text}
			</strong>
			<Stars rating={rating} />
			<style jsx>
				{`
				p {
					display: flex;
					align-items: center;
					margin: 0px;
				}
				strong {
					margin-right: 0.5rem
				}
				`}
			</style>
		</p>
	)
}