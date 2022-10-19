import React, { useState } from 'react';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { updateDataUser } from 'lib/api';
import { useUserData } from 'hooks';
import css from './index.css';

type LoginForm = {
	onLogin: ({}) => any;
};

export function UpdateUserForm(props: LoginForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [hasPassword, setHassPassword] = useState(true);

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		const userName = e.target.name.value;
		const userPassword = e.target.password.value;
		const userPasswordConfirm = e.target.passwordConfirm.value;
		const token = userDataState.token;

		if (userPassword === userPasswordConfirm) {
			console.log('Soy el console log del formulario, antes de llamar a la api');

			await updateDataUser(userName, userPassword, token);
			props.onLogin({ createUser: true });
		} else {
			setHassPassword(false);
		}
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel labelText='Nombre:' name='name' type='text' placeholder='Lucas' />
			<InputLabel labelText='Contraseña' name='password' type='password' placeholder='••••••••' />
			<InputLabel
				labelText='Repetir contraseña'
				name='passwordConfirm'
				type='password'
				placeholder='••••••••'
			/>
			{hasPassword ? null : <p>Las contraseñas no coinciden</p>}
			<Button color='green' children='Actualizar' />
		</form>
	);
}
