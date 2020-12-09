import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="it">
				<Head>
					<meta
						name="application-name"
						content="Arte della Lettura"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content="Arte della Lettura"
					/>
					<meta
						name="description"
						content="Quattro chiacchiere su libri, fumetti, manga e audiolibri. Su Arte della Lettura trovi Recensioni, Interviste e Anteprime!"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="theme-color" content="#018fd9" />

					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<link rel="shortcut icon" href="/favicon.png" />

					<meta name="twitter:card" content="summary" />
					<meta
						name="twitter:url"
						content="https://www.artedellalettura.it/"
					/>
					<meta name="twitter:title" content="Arte della Lettura" />
					<meta
						name="twitter:description"
						content="Quattro chiacchiere su libri, fumetti, manga e audiolibri."
					/>
					<meta
						name="twitter:image"
						content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
					/>
					<meta name="twitter:creator" content="@PandaSekh" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Arte della Lettura" />
					<meta
						property="og:description"
						content="Quattro chiacchiere su libri, fumetti, manga e audiolibri."
					/>
					<meta
						property="og:site_name"
						content="Arte della Lettura"
					/>
					<meta
						property="og:url"
						content="https://artedellalettura.it"
					/>
					<meta property="og:image" content="/favicon.png" />
					<link rel="icon" href="/favicon.png" />
					<link rel="manifest" href="/manifest.webmanifest"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
