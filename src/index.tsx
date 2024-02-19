import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from '../config/ErrorBoundary';
import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw Error('not find root');
}

const container = createRoot(root);

container.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
