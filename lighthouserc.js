module.exports = {
	ci: {
		// ...
		assert: {
			preset: "lighthouse:recommended",
		},
		collect: {
			staticDistDir: "./.next",
		},
		// ...
	},
};
