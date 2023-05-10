import { Layout } from '@components/Layout';
import { Container, Section } from '@styles/globals';
import React from 'react';

export const ErrorPage = () => {
	return (
		<Layout>
			<Section>
				<Container>
					<h1>404</h1>
				</Container>
			</Section>
		</Layout>
	);
};
