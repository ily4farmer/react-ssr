import { About } from '@pages/About';
import { ErrorPage } from '@pages/ErrorPage';
import { Main } from '@pages/Main';
import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

export interface IRoutes {
	path: string;
	route: ReactElement;
}

const listRoutes: IRoutes[] = [
	{
		path: '/',
		route: <Main />
	},
	{
		path: '/about',
		route: <About />
	},
	{
		path: '/',
		route: <ErrorPage />
	}
];

const RoutesList = () => {
	return (
		<Routes>
			{listRoutes.map(el => (
				<Route key={el.path} path={el.path} element={el.route} />
			))}
		</Routes>
	);
};

export default RoutesList;
