module.exports = {
	purge: {
		enabled: true,
		content: [
			"./components/*.js",
			"./pages/*.js",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			customBlue: {
				light: "#45b8f5",
				DEFAULT: "#018fd9",
				dark: "#117fba",
			},
		},
		extend: {},
	},
	variants: {
		extend: {
			textColor: ["hover"],
			borderWidth: ["hover"],
		},
	},
	plugins: [],
	corePlugins: {
		animation: false,
	},
};
