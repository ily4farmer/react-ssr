import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from '../types';

export default function devClientConfig(options: BuildOptions): webpack.Configuration {
  return {
    devServer: {
      historyApiFallback: true,
      hot: false,
      open: true,
      port: options.port,
    } as DevServerConfiguration,
    devtool: 'eval',
    entry: [options.paths.entry],
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
                plugins: ['@babel/plugin-transform-react-jsx-development', 'react-refresh/babel'],
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
      filename: '[name].js',
      path: options.paths.output,
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new webpack.ProgressPlugin(),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: ['src', 'node_modules'],
    },
  };
}
