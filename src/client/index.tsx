import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '~store';

import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw Error('not find root');
}

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
delete (window as any).__PRELOADED_STATE__;

hydrateRoot(
  root,
  <StrictMode>
    <Provider store={store}>
      {/* <ChakraProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </Provider>
  </StrictMode>,
);
