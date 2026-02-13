/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';
const assetPrefix = process.env.ASSET_PREFIX || basePath;

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
