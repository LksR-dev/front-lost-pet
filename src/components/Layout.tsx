import React from 'react';
import { Outlet } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { useSearchResults } from '../hooks';
import css from './layout.css';

function Layout() {
	const handleSearch = (search) => {};
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
