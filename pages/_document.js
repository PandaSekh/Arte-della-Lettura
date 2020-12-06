import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="it">
				<Head>
					<meta charSet="UTF-8" key="charset" />
					<meta
						name="description"
						content="Recensioni di libri e fumetti."
						key="description"
					/>
					<meta
						name="keywords"
						content="libri, libro, fumetti, manga, recensioni libri, recensioni libro, lettura, letteratura"
						key="tags"
					/>
					<meta
						name="author"
						content="Alessio Franceschi"
						key="author"
					/>
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
