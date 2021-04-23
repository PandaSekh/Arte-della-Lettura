import Link from "next/link";
import { useRouter } from "next/router";
import { createRef } from "react";
import SvgHeader from "./SvgHeader";

export default function Navbar() {
	const router = useRouter();

	const burgerRef = createRef();
	const navRef = createRef();

	function handleMenuClick() {
		burgerRef.current.classList.toggle("isOpen");
		navRef.current.classList.toggle("isOpen");
		document.body.classList.toggle("lockBody");
		document.querySelector(".switch").classList.toggle("isOpen");
	}

	return (
		<header>
			<button
				ref={burgerRef}
				id="burger"
				className="openMainNav"
				onClick={handleMenuClick}
			>
				<span className="burger"></span>
			</button>

			<nav className="mobileNav" ref={navRef}>
				<ul>
					<li>
						<Link href="/" prefetch={false}>
							<a
								className={
									router.pathname == "/" ? "active" : null
								}
							>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/archivio" prefetch={false}>
							<a
								className={
									router.pathname == "/archivio"
										? "active"
										: null
								}
							>
								Archivio
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about" prefetch={false}>
							<a
								className={
									router.pathname == "/about"
										? "active"
										: null
								}
							>
								About
							</a>
						</Link>
					</li>
				</ul>
			</nav>

			<nav className="main-nav-desktop" id="main-nav-desktop">
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
									router.pathname == "/archivio"
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
			</nav>

			<div className="logo">
				<Link href="/" prefetch={false}>
					<a>
						<SvgHeader />
					</a>
				</Link>
			</div>
		</header>
	);
}
