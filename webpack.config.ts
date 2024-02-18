
import path from 'path';

import devConfig from "./config/webpack/client/dev.config";
import { BuildPaths } from './config/webpack/types';
import prodConfig from './config/webpack/client/prod.config';


type Mode = 'development' | 'production'

type EnvVariables = {
  mode?: Mode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
  }



if (env.mode === 'development') {
  return devConfig({
    port: 3000,
    paths
  })
}


if (env.mode === 'production') {
  return prodConfig({
    port: 3000,
    paths,
    analyzer: env.analyzer
  })
}



return false;
  };