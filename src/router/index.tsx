import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { MyData } from 'pages/MyData';
import { MyPets } from 'pages/MyPets';
import { ReportOrUpdatePet } from 'pages/UpdateOrRegisterPet';
import { ReportDataPet } from 'pages/ReportDataPet';
import { EmailLogin } from 'pages/Login/Email';
import { PasswordLogin } from 'pages/Login/Password';

export function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='my-data' element={<MyData />} />
				<Route path='my-pets' element={<MyPets />} />
				<Route path='report-update' element={<ReportOrUpdatePet />}>
					<Route path=':id' element={<ReportOrUpdatePet />} />
				</Route>
				<Route path='verify-email' element={<EmailLogin />} />
				<Route path='login' element={<PasswordLogin />} />
			</Route>
		</Routes>
	);
}
