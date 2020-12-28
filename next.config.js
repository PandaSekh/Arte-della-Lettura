// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");

module.exports = withPWA({
	images: {
		domains: ["cdn.sanity.io"],
	},
	poweredByHeader: false,
	assetPrefix:
		process.env.NODE_ENV === "production"
			? "https://artedellaletturacdn.b-cdn.net"
			: "",
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
});

// module.exports = withPlugins(
// 	[
// 		[
// 			withPWA,
// 			{
// 				pwa: {
// 					dest: "public",
// 					disable: process.env.NODE_ENV === "development",
// 				},
// 			},
// 		],
// 		[optimizedImages],
// 	],
// 	{
// 		images: {
// 			domains: ["cdn.sanity.io"],
// 		},
// 		poweredByHeader: false,
// 	}
// );

//https://www.npmjs.com/package/next-pwa
