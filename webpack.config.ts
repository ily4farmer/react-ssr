import path from 'path';

import devConfig from './config/webpack/client/dev.config';
import prodConfig from './config/webpack/client/prod.config';
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
    output: path.resolve(__dirname, 'build'),
  };

  if (env.mode === 'development') {
    return devConfig({
      paths,
      port: 3000,
    });
  }

  if (env.mode === 'production') {
    return prodConfig({
      analyzer: env.analyzer,
      paths,
      port: 3000,
    });
  }

  return false;
};
