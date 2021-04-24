// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");

module.exports = withPWA({
	images: {
		domains: ["cdn.sanity.io"],
	},
	poweredByHeader: false,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	future: {
    webpack5: true,
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
