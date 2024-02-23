import path from 'path';

import devConfig from './config/webpack/client/dev.config';
import serverConfig from './config/webpack/server/server.config';
import { BuildPaths } from './config/webpack/types';

type Mode = 'development' | 'production';

type EnvVariables = {
  analyzer?: boolean;
  mode?: Mode;
  port?: number;
};

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build', 'client'),
  };

  return [
    devConfig({
      paths,
      port: 3000,
    }),
    serverConfig({
      entry: path.resolve(__dirname, 'src', 'server.tsx'),
      mode: env.mode,
      output: path.resolve(__dirname, 'build', 'server'),
    }),
  ];
};
