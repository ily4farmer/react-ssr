import { IRoutes } from '@models/IRoutes';
import { Container } from '@styles/globals';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const links: IRoutes[] = [
	{
		path: '/',
		name: 'Main'
	},
	{
		path: '/about',
		name: 'about'
	}
];

const HeaderWrapper = styled.header`
	padding: 20px 0;
`;

const HeaderContent = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<HeaderContent>
					{links.map(el => (
						<Link key={el.path} to={el.path}>
							{el.name}
						</Link>
					))}
				</HeaderContent>
			</Container>
		</HeaderWrapper>
	);
};
