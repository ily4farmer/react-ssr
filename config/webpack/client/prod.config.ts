import HtmlWebpackPlugin from 'html-webpack-plugin';

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from 'webpack';

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from '../types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';



export default function prodConfig(options: BuildOptions): webpack.Configuration {
    return {
      mode: 'production',    
      entry: options.paths.entry,
      output: {
          path: options.paths.output,
          filename: '[name].[contenthash].js',
          clean: true
      },
      plugins: [  new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }), new HtmlWebpackPlugin({template: options.paths.html}), new webpack.ProgressPlugin()].concat(Boolean(options.analyzer) && new BundleAnalyzerPlugin()),
      resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
  
        module: {
          rules: [
            
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader",  "sass-loader",],
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