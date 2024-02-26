import { ResolveOptions } from 'webpack';

import { BuildPaths } from '../types';

export const resolve = (src: BuildPaths['src']): ResolveOptions => ({
  alias: {
    '~features': `${src}/client/features`,
    '~pages': `${src}/client/pages`,
    '~routes': `${src}/client/routes`,
    '~services': `${src}/client/services`,
    '~shared': `${src}/client/shared`,
    '~store': `${src}/client/store`,
    '~utils': `${src}/client/utils`,
  },
  extensions: ['.tsx', '.ts', '.js'],
  modules: ['src', 'node_modules'],
});
