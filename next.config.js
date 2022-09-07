/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: "shopify_local",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

module.exports = withFrameworkConfig(nextConfig);

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
