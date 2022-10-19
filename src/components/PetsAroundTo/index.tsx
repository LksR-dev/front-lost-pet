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
		setLoader(false);
	}, [pets]);

	const getPets = async (lat: number, lng: number): Promise<void> => {
		const pets = await getPetsAroundTo(lat, lng);
		setPets(pets);
	};

	return (
		<section>
			<div className={css.main__container}>
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
			</div>

			{loader ? <LoaderLogo /> : null}
			{pets[0] ? null : (
				<Button action={getCurrentUbication} color='green' children={'Dar mi ubicación'} />
			)}
		</section>
	);
}
