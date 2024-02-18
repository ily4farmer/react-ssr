import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from '../types';

export default function devConfig(options: BuildOptions): webpack.Configuration {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      port: options.port,
    } as DevServerConfiguration,
    devtool: 'inline-source-map',
    entry: options.paths.entry,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  // '@babel/plugin-transform-typescript',
                  // '@babel/plugin-transform-react-jsx-development',
                  // 'react-refresh/babel',
                ],
                presets: [
                  '@babel/preset-env',
                  [
                    '@babel/preset-react',
                    {
                      runtime: 'automatic',
                    },
                  ],
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
      filename: '[contenthash].js',
      path: options.paths.output,
    },
    plugins: [
      // new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({ template: options.paths.html }),
      new webpack.ProgressPlugin(),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
}
