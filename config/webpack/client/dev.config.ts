import HtmlWebpackPlugin from 'html-webpack-plugin';

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from 'webpack';

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from '../types';



export default function devConfig(options: BuildOptions): webpack.Configuration {
    return {
      mode: 'development',    
      entry: options.paths.entry,
      output: {
          path: options.paths.output,
          filename: '[contenthash].js',
          clean: true
      },
      devtool: 'inline-source-map',
      devServer: {
        port: options.port,
        open: true,
        historyApiFallback: true
      },
      plugins: [new HtmlWebpackPlugin({template: options.paths.html}), new webpack.ProgressPlugin()],
      resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
  
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', "css-loader",  "sass-loader",],
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
  
  }
}