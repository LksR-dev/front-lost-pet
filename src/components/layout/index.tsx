import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from 'components/header';

export function Layout(): JSX.Element {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
