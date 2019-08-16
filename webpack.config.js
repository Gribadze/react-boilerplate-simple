const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    runtimeChunk: {
      name: 'runtime',
    },
  },
};

module.exports = config;
