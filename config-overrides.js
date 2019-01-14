const path = require("path");
const { override, addBundleVisualizer, addWebpackAlias, addBabelPlugins } = require("customize-cra");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "#": path.resolve(__dirname, "./src")
    }),
    addBundleVisualizer({}, true),
    ...addBabelPlugins("emotion", "react-hot-loader/babel")
  ),
  jest: config => {
    config.setupTestFrameworkScriptFile = '<rootDir>/test/jest.setup.js';
    config.moduleNameMapper['#(.*)$'] = '<rootDir>/src/$1';

    return config;
  },
};
