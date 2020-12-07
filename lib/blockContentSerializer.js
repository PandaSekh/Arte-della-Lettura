import Book from "../components/Book";


export const serializers = {
	types: {
		book: props => {
			return <Book book={props.node} />;
		},
	},
	marks: {
		internalLink: ({ mark, children }) => {
			console.log(mark, children)
			const { slug = {} } = mark;
			const href = `/${slug.current}`;
			return <a href={href}>{children}</a>;
		},
	},
	link: ({ mark, children }) => {
		const { blank, href } = mark;
		return blank ? (
			<a href={href} target="_blank" rel="noopener">
				{children}
			</a>
		) : (
			<a href={href}>{children}</a>
		);
	},
};
