import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from '../pages/Home';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}></Route>
		</Routes>
	);
}

export { AppRoutes };
