module.exports = {
	purge: ["./src/**/*.js", "./public/index.html"],
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
};
