import Link from "next/link";

export default function Navbar() {
	return (
		<header>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/archive">
						<a>Archivio</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}
