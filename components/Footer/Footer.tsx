export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="pt-6	pb-4 text-center left-2/4 mx-auto">
			<small>&copy; Copyright {year}, Alessio Franceschi</small>
		</footer>
	);
}