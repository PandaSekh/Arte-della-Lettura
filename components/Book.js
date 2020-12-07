import { getImgUrl } from "../lib/sanityClient";
import Image from "next/image";

export default function Book(props) {
	return (
		<div id="book-block">
			<Image
				src={getImgUrl(props.book.cover).width(500).url()}
				width={500}
				height={700}
			/>
			<h3>{props.book.title}</h3>
		</div>
	);
}
