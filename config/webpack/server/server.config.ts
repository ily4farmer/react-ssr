import { Configuration } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

type TServerConfig = {
  entry: string;
  mode: 'development' | 'production';
  output: string;
};

const serverConfig = (options: TServerConfig): Configuration => ({
  devtool: 'source-map',
  entry: options.entry,
  externals: webpackNodeExternals(),
  mode: options.mode,
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
                // '@babel/preset-react',
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
  //   node: { __dirname: false },
  optimization: { nodeEnv: false },

  output: {
    clean: true,
    filename: 'server.js',
    // libraryTarget: 'commonjs2',
    path: options.output,
  },

  // performance: {
  //   hints: 'warning',
  // },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // modules: ['src', 'node_modules'],
  },

  target: 'node',
});

export default serverConfig;
