import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { RecoilRoot } from 'recoil';

export const SearchProduct = React.createContext({});

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</RecoilRoot>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
