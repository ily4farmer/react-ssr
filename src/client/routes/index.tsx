import { About } from '../pages/About';
import { Home } from '../pages/Home';

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
