/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.artedellalettura.it",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
};
