import Image from "next/image";

export default function CustomImage({ url, alt }) {
	return (
		<Image
			src={`/static/images/${url}`}
			loading="lazy"
			width={300}
			height={460}
			alt={alt ? alt : "Copertina Libro"}
		/>
	);
}
