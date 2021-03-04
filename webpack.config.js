const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = () => ({
  mode: "production",
  entry: "./src",
  externals: [/^react(-dom)?$/],
  plugins: [new BundleAnalyzerPlugin()],
});
