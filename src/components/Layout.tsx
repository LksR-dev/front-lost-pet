import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import css from './layout.css';

function Layout() {
	return (
		<>
			<header className={css.root}>
				<SearchForm />
			</header>
			<Outlet />
		</>
	);
}

export { Layout };
