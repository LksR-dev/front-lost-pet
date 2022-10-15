import React from 'react';
import { ShowPetsAroundTo } from '../../components/petsAroundTo';
import css from './index.css';

function Home() {
	return (
		<main className={css.main__container}>
			<h2 className={css.main__title}>Dar mi ubicación para buscar mascotas perdidas.</h2>
			<ShowPetsAroundTo />
		</main>
	);
}

export { Home };
