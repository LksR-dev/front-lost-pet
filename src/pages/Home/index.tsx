import React from 'react';
import { ShowPetsAroundTo } from 'components/ShowPets/ShowPetsAround';
import css from './index.css';

export function Home() {
	return (
		<main className={css.main__container}>
			<h2 className={css.main__title}>Mascotas Perdidas.</h2>
			<ShowPetsAroundTo />
		</main>
	);
}
