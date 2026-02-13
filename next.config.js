/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
