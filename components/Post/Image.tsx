import Image from "next/image";

export default function CustomImage({
	url,
	alt,
	width,
	height,
	layout,
	center,
}: {
	url: string;
	alt: string;
	width: number;
	height: number;
	layout: "fixed" | "intrinsic" | "responsive" | undefined;
	center: boolean;
}) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: center ? "center" : "",
			}}
		>
			<Image
				src={`/static/images/${url}`}
				loading="lazy"
				width={width ? width : 300}
				height={height ? height : 460}
				alt={alt ? alt : "Copertina Libro"}
				layout={layout ? layout : "intrinsic"}
			/>
		</div>
	);
}
