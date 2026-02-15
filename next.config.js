/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const withProgress = process.env.BUILD_PROGRESS === '1';
const disableCache = process.env.DISABLE_WEBPACK_CACHE === '1';
const swcMinifyEnv = process.env.SWC_MINIFY;
const swcMinify = swcMinifyEnv === '0' ? false : swcMinifyEnv === '1' ? true : undefined;
console.log(
  `[next.config] BUILD_PROGRESS=${withProgress ? 'on' : 'off'} CACHE=${disableCache ? 'off' : 'on'} SWC_MINIFY=${swcMinify ?? 'default'}`
);

const nextConfig = {
  ...(swcMinify !== undefined ? { swcMinify } : {}),
  typescript: {
    ignoreBuildErrors: true
  },
  webpack(config) {
    if (disableCache) {
      console.log('Disabling webpack persistent cache (DISABLE_WEBPACK_CACHE=1)');
      config.cache = false;
    }
    if (withProgress) {
      console.log('Enabling webpack progress logging');
      config.plugins.push(
        new webpack.ProgressPlugin((percentage, message, ...args) => {
          const pct = Math.round(percentage * 100);
          const details = args.filter(Boolean).join(' ');
          console.log(`[webpack] ${pct}% ${message}${details ? ` - ${details}` : ''}`);
        })
      );
    }
    return config;
  }
};

module.exports = nextConfig;
