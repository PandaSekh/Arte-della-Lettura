module.exports = {
	ci: {
		// ...
		assert: {
			preset: "lighthouse:recommended",
		},
		collect: {
			staticDir: "./.next",
		},
		// ...
	},
};
