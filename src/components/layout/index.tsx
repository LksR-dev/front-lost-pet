import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '../header';
import css from './index.css';

function Layout(): JSX.Element {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export { Layout };
