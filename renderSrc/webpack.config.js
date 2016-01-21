/**
 * Created by ryota on 15/09/06.
 */
module.exports = {
  entry: {
    app: "./index.js"
    //app: "./src/sample/app.js"
  },
  output: {
    filename: "./build/app.js"
    //filename: "./dest/app.js"
  },
  // source-mapを出力
  devtool: "#source-map",
  module: {
    // ローダ設定
    loaders: [
      {test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ["es2015","react","stage-0"],
          plugins: ["syntax-flow","transform-flow-strip-types"]
        }
      }
    ]
  },
  resolve: {
    // requireやimport時の拡張子を省略
    extensions: ['', '.js', '.jsx']
  },
};