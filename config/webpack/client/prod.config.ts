import CompressionPlugin from 'compression-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { resolve } from '../modules/resolve';
import { BuildOptions } from '../types';

export default function clientProdConfig(options: BuildOptions): webpack.Configuration {
  return {
    devtool: 'source-map',
    entry: options.paths.entry,
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  '@babel/plugin-transform-typescript',
                  '@babel/plugin-transform-react-jsx-source',
                ],
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }],
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
      ],
    },
    output: {
      clean: true,
      filename: '[name].js',
      path: options.paths.output,
    },
    plugins: [
      new CompressionPlugin({ algorithm: 'gzip' }),
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        chunkFilename: 'css/[name].[contenthash:8].css',
        filename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.ProgressPlugin(),
    ].concat(Boolean(options.analyzer) && new BundleAnalyzerPlugin()),
    resolve: resolve(options.paths.src),
    target: 'web',
  };
}
