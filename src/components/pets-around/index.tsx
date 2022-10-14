import React, { useState } from 'react';
import { Button } from '../../ui/buttons/MainButton';
import { useLatLngLocalStorage, useGetPetsAround } from '../../hooks';
import css from './index.css';

function ShowPetsAroundTo() {
	const [pets, setPets] = useState([]);

	function getCurrentUbication(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat: number = position.coords.latitude;
			const lng: number = position.coords.longitude;
			useLatLngLocalStorage({ lat, lng });
			getPets(lat, lng);
		});
	}

	const getPets = async (lat: number, lng: number): Promise<void> => {
		const pets = await useGetPetsAround(lat, lng);
		setPets(pets);
	};

	return (
		<section className={css.main__container}>
			{pets[0] ? null : (
				<Button action={getCurrentUbication} color='green' children={'Dar mi ubicación'} />
			)}
			{pets.length > 0 ? (
				pets.map((pet) => {
					console.log(pet);

					return <div></div>;
				})
			) : (
				<div></div>
			)}
		</section>
	);
}

export { ShowPetsAroundTo };
