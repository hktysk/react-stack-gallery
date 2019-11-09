const path = require('path')

module.exports = {
  mode: "development",
  entry: {
    "index.js": "./example/src/index.tsx",
  },
  output: {
    path: __dirname,
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: "/node_modules/"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example/public'),
    watchContentBase: true
  }
}
