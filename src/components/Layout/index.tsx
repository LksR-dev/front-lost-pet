import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from 'components/Header';

export function Layout(): JSX.Element {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
