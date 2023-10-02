const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
module.exports = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.industrialempathy.com",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-left",
  },
};
