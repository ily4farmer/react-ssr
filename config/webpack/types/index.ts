export type BuildPaths = {
  entry: string;
  output: string;
};

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
  analyzer?: boolean;
  paths: BuildPaths;
  port: number;
};
