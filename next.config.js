const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
};
