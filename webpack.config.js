const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  performance : {
    hints : false
  },
  resolve: {
    extensions: ['.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.tsx$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    ],
  devServer: {
    contentBase: path.join(__dirname, './src'),
    port: 3000,
    hotOnly: true,
    compress: true,
    open: true,
    watchContentBase: true /* ativar o watcher */,
    //stats: 'minimal' /* desativar info desnecessaria */
}
}