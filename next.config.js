// const withPWA = require("next-pwa");

// module.exports = withPWA({
// 	poweredByHeader: false,
// 	pwa: {
// 		dest: "public",
// 		disable: process.env.NODE_ENV === "development",
// 	},
// 	future: {
// 		webpack5: true,
// 	},
// });

const nextConfiguration = {
	poweredByHeader: false,
	future: {
		webpack5: true,
	},
};

const withPlugins = require("next-compose-plugins");
const PWA = require("next-pwa")({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: true,
});

module.exports = withPlugins([PWA, withBundleAnalyzer], nextConfiguration);
