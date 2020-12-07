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
			<div>
				<img
					className="max-h-auto max-w-3xl w-2/6"
					src="/images/logo.png"
					alt="Logo Arte della Lettura"
				/>
			</div>
		</header>
	);
}
