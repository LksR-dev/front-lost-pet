import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyDropzone } from 'components/Dropzone';
import { Mapbox } from 'components/Mapbox';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { getOnePet, updatePet, deletePet } from 'lib/api';
import { useUserData, usePetData } from 'hooks';
import css from './index.css';

type PetRegisterForm = {
	onUpdatePet: (petUpdated) => any;
};

export function UpdateDataPetForm(props: PetRegisterForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [petData, setPetData] = usePetData();
	const [actualPet, setActualPet] = useState({
		petname: '',
		img: '',
		ubication: '',
		lat: 0,
		lng: 0,
	});
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getOnePet(Number(id), userDataState.token).then((res) =>
			setActualPet({
				petname: res.name,
				img: res.img,
				ubication: res.ubication,
				lat: Number(res.last_lat),
				lng: Number(res.last_lng),
			}),
		);
	}, [id]);

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		const data = petData as any;
		const img = data.img;
		const lat = data.lat;
		const lng = data.lng;
		const ubication = data.ubication;
		const petname = e.target.name.value;
		setPetData({ ...petData, petname });
		if (img && lat && lng && petname && ubication) {
			try {
				const pet = await updatePet(
					Number(id),
					petname,
					img,
					lat,
					lng,
					ubication,
					userDataState.token,
				);
				props.onUpdatePet(true);
			} catch {
				props.onUpdatePet(false);
			}
		}
	};

	const handleDelete = async () => {
		const petDeleted = await deletePet(Number(id), userDataState.token);
		petDeleted ? props.onUpdatePet({ petDeleted: true }) : null;
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel
				labelText='Nombre:'
				name='name'
				type='text'
				placeholder='Manchas'
				value={actualPet.petname ? actualPet.petname : ''}
			/>
			<MyDropzone img={actualPet.img ? actualPet.img : null} />
			<Mapbox
				location={{ lat: actualPet.lat, lng: actualPet.lng }}
				ubication={actualPet.ubication ? actualPet.ubication : null}
			/>
			<Button color='green' children='Actualizar' />
			<Button
				action={() => {
					handleDelete();
				}}
				color='green'
				children='Eliminar'
			/>
			<Button action={() => navigate('/')} color='gray' children='Cancelar' />
		</form>
	);
}
