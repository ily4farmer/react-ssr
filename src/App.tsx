import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage, Main, About } from './pages';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
