import React from 'react';
import { ShowMyPets } from 'components/ShowPets/ShowMyPets';
import css from './index.css';

export function MyPets() {
	return (
		<main>
			<h2 className={css.main__container}>Mis pets</h2>
			<ShowMyPets />
		</main>
	);
}
