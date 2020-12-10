import Link from "next/link";
import { useRouter } from "next/router";
import { createRef } from "react";

import style from "../styles/MobileMenu.module.css";
import NavLinks from "./NavLinks";

export default function Navbar() {
	const router = useRouter();

	const burgerRef = createRef();
	const navRef = createRef();

	function handleMenuClick() {
		burgerRef.current.classList.toggle(style.isOpen);
		navRef.current.classList.toggle(style.isOpen);
		document.body.classList.toggle(style.lockBody);
	}

	// const urls = [
	// 	{
	// 		url: "/",
	// 		name: "Home",
	// 	},
	// 	{
	// 		url: "/archivio",
	// 		name: "Archivio",
	// 	},
	// 	{
	// 		url: "/about",
	// 		name: "About",
	// 	},
	// ];

	return (
		<header>
			<button
				ref={burgerRef}
				id="burger"
				className={style.openMainNav}
				// className="open-main-nav"
				onClick={handleMenuClick}
			>
				<span className={style.burger}></span>
				{/* <span className="burger"></span> */}
				<span className={style.burgerText}>Menu</span>
				{/* <span className="burger-text">Menu</span> */}
			</button>

			{/* <NavLinks isMobile={true} navRef={navRef} urls={urls} />
			<NavLinks isMobile={false} navRef={navRef} urls={urls} /> */}

			<nav className={style.mobileNav} ref={navRef}>
				<ul>
					<li>
						<Link href="/" prefetch={false}>
							<a
								className={
									router.pathname == "/" ? style.active : null
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
										? style.active
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
										? style.active
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
			</nav>

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
