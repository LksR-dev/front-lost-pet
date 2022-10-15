import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from '../pages/home';
import { MyData } from '../pages/mydata';
import { MyPets } from '../pages/mypets';
import { ReportPet } from '../pages/reportpet';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='my-data' element={<MyData />} />
				<Route path='my-pets' element={<MyPets />} />
				<Route path='report-pet' element={<ReportPet />} />
			</Route>
		</Routes>
	);
}

export { AppRoutes };
