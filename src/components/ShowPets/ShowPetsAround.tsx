import React, { useState, useEffect } from 'react';
import { Button } from 'ui/buttons/MainButton';
import { PetCard } from 'components/PetCard';
import { LoaderLogo } from 'components/Loader/LogoLoader';
import { useUserData } from 'hooks';
import { getPetsAroundTo } from 'lib/api';
import css from './index.css';

export function ShowPetsAroundTo() {
	const [pets, setPets] = useState([]);
	const [loader, setLoader] = useState(false);
	const [userData, setUserData] = useUserData();
	const userLat = userData.lat;
	const userLng = userData.lng;

	function getCurrentUbication(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat: number = position.coords.latitude;
			const lng: number = position.coords.longitude;
			setLoader(true);
			getPets(lat, lng);
			setUserData({ ...userData, lat, lng });
		});
	}
	useEffect(() => {
		if (pets) setLoader(false);
	}, [pets]);

	useEffect(() => {
		if (userLat && userLng) {
			getPets(userLat, userLng);
			setLoader(true);
		}
	}, [userLat]);

	const getPets = async (lat: number, lng: number): Promise<void> => {
		setLoader(true);
		const pets = await getPetsAroundTo(lat, lng);
		setPets(pets);
	};

	return (
		<section>
			<div className={css.main__container}>
				{pets ? (
					pets.map((pet) => (
						<PetCard
							key={pet.objectID}
							id={pet.objectID}
							name={pet.petName}
							ubication={pet.ubication}
							img={pet.img}
						/>
					))
				) : (
					<p>No hay mascotas cerca tuyo.</p>
				)}
			</div>

			{loader ? <LoaderLogo /> : null}
			{userLat && userLng ? null : (
				<Button action={getCurrentUbication} color='dark__blue' children={'Buscar mascotas'} />
			)}
		</section>
	);
}
