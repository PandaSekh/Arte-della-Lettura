import imageUrlBuilder from "@sanity/image-url";

const sanityImageClient = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	useCdn: true,
});

export function getImgUrl(source) {
	return imageUrlBuilder(sanityImageClient).image(source);
}
