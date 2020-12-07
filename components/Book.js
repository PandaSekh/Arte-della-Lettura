export default function Book(props) {
	return (
		<div>
			<p>Book block</p>
			<p>{props.book.title}</p>
		</div>
	);
}
