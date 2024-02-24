import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export const App = () => (
  <Routes>
    {routes.map(({ Component, path }) => (
      <Route
        path={path}
        key={path}
        element={
          <Suspense fallback={<div>...Loading</div>}>
            <Component />
          </Suspense>
        }
      />
    ))}
  </Routes>
);
