const withPWA = require("next-pwa");

module.exports = withPWA({
	poweredByHeader: false,
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
	},
	future: {
		webpack5: true,
	},
});