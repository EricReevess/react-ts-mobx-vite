const { mergeConfig } = require('vite');
const { resolve, dirname } = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    // return the customized config

    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          '@assets': resolve(dirname(__dirname), './src/assets'),
          '@c': resolve(dirname(__dirname), './src/components'),
          '@lib': resolve(dirname(__dirname), './src/lib'),
          '@src': resolve(dirname(__dirname), './src'),
          '@store': resolve(dirname(__dirname), './src/store'),
        },
      },
    });
  },
};