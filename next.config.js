/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

module.exports = withFrameworkConfig(nextConfig);
