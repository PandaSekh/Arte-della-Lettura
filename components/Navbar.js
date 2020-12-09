import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();

	return (
		<header>
			<ul className="navbar-ul">
				<li className="navbar-li">
					<Link href="/" prefetch={false}>
						<a
							className={
								router.pathname == "/"
									? "active navbar-link"
									: "navbar-link"
							}
						>
							Home
						</a>
					</Link>
				</li>
				<li className="navbar-li">
					<Link href="/archivio" prefetch={false}>
						<a
							className={
								router.pathname == "/archive"
									? "active navbar-link"
									: "navbar-link"
							}
						>
							Archivio
						</a>
					</Link>
				</li>
				<li className="navbar-li">
					<Link href="/about" prefetch={false}>
						<a
							className={
								router.pathname == "/about"
									? "active navbar-link"
									: "navbar-link"
							}
						>
							About
						</a>
					</Link>
				</li>
			</ul>
			<div>
				<Link href="/" prefetch={false}>
					<a>
						<img
							className="logo"
							src="/images/Logo.png"
							alt="Logo Arte della Lettura"
						/>
					</a>
				</Link>
			</div>
		</header>
	);
}
