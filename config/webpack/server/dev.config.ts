import { Configuration } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

import { resolve } from '../modules/resolve';
import { BuildPaths } from '../types';

const devServerConfig = (options: BuildPaths): Configuration => ({
  devtool: 'source-map',
  entry: options.entry,
  externals: webpackNodeExternals(),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'react-hot-loader/babel',
                '@babel/plugin-transform-react-jsx-development',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
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
  name: 'server',
  optimization: { nodeEnv: false },

  output: {
    clean: true,
    filename: 'server.js',
    path: options.output,
  },

  resolve: resolve(options.src),

  target: 'node',
});

export default devServerConfig;
