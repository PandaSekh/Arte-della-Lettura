import imageUrlBuilder from "@sanity/image-url";

export const sanityImageClient = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	useCdn: true,
});

export function getImgUrl(source) {
	return imageUrlBuilder(sanityImageClient).image(source);
}
