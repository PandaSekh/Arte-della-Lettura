const withPWA = require("next-pwa");

module.exports = withPWA({
	images: {
		domains: ["cdn.sanity.io"],
	},
	poweredByHeader: false,
	pwa: {
		dest: "public",
	},
});

//https://www.npmjs.com/package/next-pwa
