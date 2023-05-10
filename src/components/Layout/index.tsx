import { Container } from '@styles/globals';
import React from 'react';
import { Header } from './Header';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="main">{children}</main>
			<footer className="footer">
				<Container>footer</Container>
			</footer>
		</>
	);
};
