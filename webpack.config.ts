import path from 'path';

import devClientConfig from './config/webpack/client/dev.config';
import clientProdConfig from './config/webpack/client/prod.config';
import devServerConfig from './config/webpack/server/dev.config';
import prodServerConfig from './config/webpack/server/prod.config';
import { BuildMode, BuildPaths } from './config/webpack/types';

type EnvVariables = {
  analyzer?: boolean;
  mode?: BuildMode;
  port?: number;
};

export default (env: EnvVariables) => {
  const pathsClient: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
    output: path.resolve(__dirname, 'build', 'client'),
    src: path.resolve(__dirname, 'src'),
  };

  const pathsServer: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'server', 'server.tsx'),
    output: path.resolve(__dirname, 'build', 'server'),
    src: path.resolve(__dirname, 'src'),
  };

  if (env.mode === 'development') {
    return [
      devClientConfig({
        paths: pathsClient,
        port: 3000,
      }),
      devServerConfig({
        ...pathsServer,
      }),
    ];
  }

  if (env.mode === 'production') {
    return [
      clientProdConfig({
        paths: pathsClient,
        port: 3000,
      }),
      prodServerConfig({
        ...pathsServer,
      }),
    ];
  }
};
