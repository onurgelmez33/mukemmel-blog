module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};
const withCSS = require('@zeit/next-css');
module.exports = withCSS({/* my next config */ });
