// import Link from "next/link";
// import { useRouter } from "next/router";
// import { createRef } from "react";

// // import style from "../styles/MobileMenu.module.css";

// export default function NavLinks(props) {
// 	const navStyle = props.isMobile ? style.mobileNav : "main-nav-desktop";
// 	const ulStyle = props.isMobile ? "" : "navbar-ul";
// 	const liStyle = props.isMobile ? "" : "navbar-li";
// 	const activeStyle = props.isMobile ? style.active : "active navbar-link";
// 	const notActiveStyle = props.isMobile ? null : "navbar-link";
// 	const navRef = props.navRef;

// 	const router = useRouter();

// 	const links = props.urls.map(url => {
// 		return (
// 			<li className={liStyle} key={url.url + props.isMobile}>
// 				<Link href={url.url} prefetch={false}>
// 					<a
// 						className={
// 							router.pathname == url.url
// 								? activeStyle
// 								: notActiveStyle
// 						}
// 					>
// 						{url.name}
// 					</a>
// 				</Link>
// 			</li>
// 		);
// 	});

// 	return (
// 		<nav className={navStyle} ref={navRef}>
// 			<ul className={ulStyle}>{links}</ul>
// 		</nav>
// 	);
// }
