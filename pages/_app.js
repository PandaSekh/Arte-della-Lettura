import "../styles/style.css";

import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Arte della Lettura</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Esempio" key="description" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
					key="viewport"
				/>
			</Head>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
		</Fragment>
	);
}

export default MyApp;
