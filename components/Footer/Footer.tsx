export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<small>&copy; Copyright {year}, Alessio Franceschi</small>
		</footer>
	);
}
