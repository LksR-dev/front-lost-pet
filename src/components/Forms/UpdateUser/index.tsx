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
		const userName: string = e.target.name.value;
		const userPassword = e.target.password.value;
		const userPasswordConfirm = e.target.passwordConfirm.value;
		const token: string = userDataState.token;

		if (userPassword === userPasswordConfirm) {
			await updateDataUser(userName, userPassword, token);
			setUserData({ ...userDataState, fullname: userName });
			props.onLogin({ updateUser: true });
		} else {
			setHassPassword(false);
		}
	};
	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel
				labelText='Nombre:'
				name='name'
				type='text'
				placeholder={userDataState.fullname}
			/>
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
