import "../styles/style.css";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	const Navbar = dynamic(() => import("../components/Navbar"));

	return (
		<Fragment>
			<Head>
				<title>
					Arte della Lettura | Recensioni di Libri e Fumetti
				</title>
				<meta
					name="description"
					content="Quattro chiacchiere su libri, fumetti, manga e audiolibri. Su Arte della Lettura trovi Recensioni, Interviste e Anteprime!"
					key="description"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
					key="viewport"
				/>
			</Head>
			<Navbar />
			<main>
				<div className="content">
					<Component {...pageProps} />
				</div>
				<div className="sidebar">Sidebar</div>
			</main>
		</Fragment>
	);
}

export default MyApp;
