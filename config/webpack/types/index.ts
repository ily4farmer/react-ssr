export type BuildPaths = {
    entry: string;
    output: string;
    html: string;
}

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
    paths: BuildPaths;
    port: number;
    analyzer?:boolean
}