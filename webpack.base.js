const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  //   [
  //   //   "css-modules-transform",
  //   //   {
  //   //     camelCase: true,
  //   //     extensions: [".css", ".scss"],
  //   //   },
  //   // ],
  //   // "dynamic-import-node",
  ],
};
