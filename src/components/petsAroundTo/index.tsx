import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/buttons/MainButton';
import { PetCard } from '../petCard';
import { useUserData } from '../../hooks';
import { getPetsAroundTo } from '../../lib/api';
import css from './index.css';

export function ShowPetsAroundTo() {
	const [pets, setPets] = useState([]);
	const [userData, setUserData] = useUserData();

	function getCurrentUbication(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat: number = position.coords.latitude;
			const lng: number = position.coords.longitude;
			getPets(lat, lng);
			setUserData({ lat, lng });
		});
	}

	const getPets = async (lat: number, lng: number): Promise<void> => {
		const pets = await getPetsAroundTo(lat, lng);
		setPets(pets);
	};

	return (
		<section className={css.main__container}>
			{pets ? (
				pets.map((pet) => {
					return (
						<PetCard
							key={pet.objectID}
							name={pet.petName}
							ubication={pet.ubication}
							img={pet.img}
						/>
					);
				})
			) : (
				<p>No hay mascotas cerca tuyo</p>
			)}
			{pets[0] ? null : (
				<Button action={getCurrentUbication} color='green' children={'Dar mi ubicación'} />
			)}
		</section>
	);
}
