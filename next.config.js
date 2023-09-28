/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en', 'hi'],
//     defaultLocale: 'en',
//     localeDetection: false,
//   },
// }

//module.exports = {nextConfig}
module.exports = {
  i18n,
  reactStrictMode: true,
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
};
