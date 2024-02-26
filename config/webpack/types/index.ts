export type BuildPaths = {
  entry: string;
  output: string;
  src: string;
};

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
  analyzer?: boolean;
  paths: BuildPaths;
  port: number;
};
