import React, { useState } from 'react';
import { MyDropzone } from 'components/Dropzone';
import { Mapbox } from 'components/Mapbox';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { userAuth, getToken } from 'lib/api';
import { useUserData, usePetData } from 'hooks';
import css from './index.css';

type LoginForm = {
	onLogin: ({}) => any;
};

export function CreateUserForm(props: LoginForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [hasPassword, setHassPassword] = useState(true);
	const [petData, setPetData] = usePetData();
	console.log(petData);

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		const petName = e.target.name.value;

		setPetData({ ...petData, petName });
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
