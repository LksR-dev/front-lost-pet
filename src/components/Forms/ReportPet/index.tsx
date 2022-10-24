import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyDropzone } from 'components/Dropzone';
import { Mapbox } from 'components/Mapbox';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { postPet } from 'lib/api';
import { useUserData, usePetData } from 'hooks';
import css from './index.css';

type PetRegisterForm = {
	onRegisterPet: (petReported) => any;
};

export function PetRegisterForm(props: PetRegisterForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [petData, setPetData] = usePetData();
	const navigate = useNavigate();

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
				await postPet(petname, img, lat, lng, ubication, userDataState.token);
				props.onRegisterPet(true);
			} catch {
				props.onRegisterPet(false);
			}
		}
	};
	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel labelText='Nombre:' name='name' type='text' placeholder='Manchas' />
			<MyDropzone />
			<Mapbox />
			<Button color='green' children='Reportar' />
			<Button action={() => navigate('/')} color='gray' children='Cancelar' />
		</form>
	);
}
