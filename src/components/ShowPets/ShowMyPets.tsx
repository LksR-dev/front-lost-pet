import React, { useState, useEffect } from 'react';
import { PetCard } from 'components/PetCard';
import { LoaderLogo } from 'components/Loader/LogoLoader';
import { useUserData } from 'hooks';
import { getMyPets } from 'lib/api';
import css from './index.css';

export function ShowMyPets() {
	const [pets, setPets] = useState([]);
	const [loader, setLoader] = useState(false);
	const [userData, setUserData] = useUserData();

	useEffect(() => {
		setLoader(true);
		getPets();
	}, []);

	const getPets = async (): Promise<void> => {
		const myPets = await getMyPets(userData.token);
		setPets(myPets);
		setLoader(false);
	};

	return (
		<section>
			<div className={css.main__container}>
				{pets ? (
					pets.map((pet) => {
						return (
							<PetCard
								key={pet.id}
								id={pet.id}
								name={pet.name}
								ubication={pet.ubication}
								img={pet.img}
							/>
						);
					})
				) : (
					<p>No tienes mascotas reportadas.</p>
				)}
				{loader ? <LoaderLogo /> : null}
			</div>
		</section>
	);
}
