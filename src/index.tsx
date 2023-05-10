import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import { Global } from './styles/globals';

const root = ReactDOM.createRoot(document.getElementById('app') as Element | DocumentFragment);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Global />
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
