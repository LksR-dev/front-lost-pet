import React, { useState } from 'react';
import { MyDropzone } from 'components/Dropzone';
import { Mapbox } from 'components/Mapbox';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { userAuth, getToken } from 'lib/api';
import { useUserData } from 'hooks';
import css from './index.css';

type LoginForm = {
	onLogin: ({}) => any;
};

export function CreateUserForm(props: LoginForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [hasPassword, setHassPassword] = useState(true);

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		const userEmail = userDataState.email;
		const userName = e.target.name.value;
		const userPassword = e.target.password.value;
		const userPasswordConfirm = e.target.passwordConfirm.value;

		if (userPassword === userPasswordConfirm) {
			await userAuth(userEmail, userPassword, userName);
			const token = await getToken(userEmail, userPassword);
			setUserData({ ...userDataState, token });
			props.onLogin({ createUser: true });
		} else {
			setHassPassword(false);
		}
	};

	const getLocation = (name, lat, lng) => {
		console.log(name, lat, lng);
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel labelText='Nombre:' name='name' type='text' placeholder='Manchas' />
			<MyDropzone />
			<Mapbox geoLoc={getLocation} />
			<Button color='green' children='Guardar' />
		</form>
	);
}
