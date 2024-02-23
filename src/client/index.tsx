import { hydrateRoot } from 'react-dom/client';

import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw Error('not find root');
}

hydrateRoot(root, <App />);
