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
});

//https://www.npmjs.com/package/next-pwa
