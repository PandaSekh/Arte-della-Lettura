import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState } from "react";

// import style from "../styles/MobileMenu.module.css";
// import NavLinks from "./NavLinks";
import SvgHeader from "./SvgHeader";

export default function Navbar() {
	const router = useRouter();

	const burgerRef = createRef();
	const navRef = createRef();

	function handleMenuClick() {
		burgerRef.current.classList.toggle("isOpen");
		navRef.current.classList.toggle("isOpen");
		document.body.classList.toggle("lockBody");
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
				className="openMainNav"
				// className="open-main-nav"
				onClick={handleMenuClick}
			>
				<span className="burger"></span>
				{/* <span className="burgerText">Menu</span> */}
			</button>

			{/* <NavLinks isMobile={true} navRef={navRef} urls={urls} />
			<NavLinks isMobile={false} navRef={navRef} urls={urls} /> */}

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
						{/* <img
							className="logo"
							src="/images/Logo.png"
							alt="Logo Arte della Lettura"
						/> */}
					</a>
				</Link>
			</div>
		</header>
	);
}
