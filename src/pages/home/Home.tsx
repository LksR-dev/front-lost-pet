import React from 'react';
import { Button } from '../../ui/buttons/MainButton';
import { ShowPetsAroundTo } from '../../components/pets-around';
import { useLatLngLocalStorage } from '../../hooks';
import css from './index.css';

function Home() {
	function getCurrentUbication(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat: number = position.coords.latitude;
			const lng: number = position.coords.longitude;

			useLatLngLocalStorage({ lat, lng });
		});
	}

	return (
		<main className={css.main__container}>
			<h2 className={css.main__title}>Dar mi ubicación para buscar mascotas perdidas.</h2>
			<ShowPetsAroundTo />
		</main>
	);
}

export { Home };
