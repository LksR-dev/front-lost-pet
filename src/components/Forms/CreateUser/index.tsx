import React, { useState } from 'react';
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
			<Button color='dark__blue' children='Guardar' />
		</form>
	);
}
