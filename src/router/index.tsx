import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/home';
import { MyData } from 'pages/mydata';
import { MyPets } from 'pages/mypets';
import { ReportPet } from 'pages/reportpet';
import { EmailLogin } from 'pages/login/Email';
import { PasswordLogin } from 'pages/login/Password';

export function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='my-data' element={<MyData />} />
				<Route path='my-pets' element={<MyPets />} />
				<Route path='report-pet' element={<ReportPet />} />
				<Route path='verify-email' element={<EmailLogin />} />
				<Route path='login' element={<PasswordLogin />} />
			</Route>
		</Routes>
	);
}
