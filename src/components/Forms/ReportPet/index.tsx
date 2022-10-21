import React, { useState } from 'react';
import { MyDropzone } from 'components/Dropzone';
import { Mapbox } from 'components/Mapbox';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { userAuth, getToken, postPet } from 'lib/api';
import { useUserData, usePetData } from 'hooks';
import css from './index.css';

type LoginForm = {
	onLogin: ({}) => any;
};

export function CreateUserForm(props: LoginForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [hasPassword, setHassPassword] = useState(true);
	const [petData, setPetData] = usePetData();

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
			console.log('entre al if');

			postPet(petname, img, lat, lng, ubication, userDataState.token);
		}
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel labelText='Nombre:' name='name' type='text' placeholder='Manchas' />
			<MyDropzone />
			<Mapbox />
			<Button color='green' children='Reportar' />
			<Button color='gray' children='Cancelar' />
		</form>
	);
}
