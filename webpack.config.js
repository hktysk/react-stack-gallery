module.exports = {
  mode: "development",
  entry: {
    "./src/index.jsx": "./src/index.tsx",
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
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
}
