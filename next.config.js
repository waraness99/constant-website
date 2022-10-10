/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HYGRAPH_ENTRYPOINT: process.env.HYGRAPH_ENTRYPOINT,
    CRISP_WEBSITE_ID: process.env.CRISP_WEBSITE_ID,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
