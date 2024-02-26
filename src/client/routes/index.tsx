import { About, Home } from '~pages';

type TRoute = {
  Component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
};

export const routes: TRoute[] = [
  {
    Component: Home,
    path: '/',
  },
  {
    Component: About,
    path: '/about',
  },
];
