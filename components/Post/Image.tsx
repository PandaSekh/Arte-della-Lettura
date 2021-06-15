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
}): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: center ? "center" : "",
      }}
    >
      <Image
        src={`/static/images/${url}`}
        width={width || 300}
        height={height || 460}
        alt={alt || "Copertina Libro"}
        layout={layout || "intrinsic"}
        priority
      />
    </div>
  );
}
