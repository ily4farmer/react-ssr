import { lazy } from 'react';

export const LazyAbout = lazy(() => import('./About').then(({ About }) => ({ default: About })));
