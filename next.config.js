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
};

const withPlugins = require("next-compose-plugins");
const PWA = require("next-pwa")({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports = withPlugins([PWA], nextConfiguration);
