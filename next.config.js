const nextConfiguration = {
  poweredByHeader: false,
};

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["better-substring"]);

module.exports = withPlugins([withTM], nextConfiguration);
