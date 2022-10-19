import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components/Forms/LoginForm';
import { useGoTo } from 'hooks';
import css from './index.css';

export function PasswordLogin(): JSX.Element {
	const [goTo, setGoTo] = useGoTo();
	const [passwordExists, setPasswordExists] = useState(true);
	const navigate = useNavigate();

	const getEmail = async (isLogged) => {
		if (isLogged.login) {
			navigate(goTo);
		} else {
			setPasswordExists(false);
		}
	};

	return (
		<main className={css.main__container}>
			<LoginForm
				labelText='Password: '
				inputName='password'
				inputType='password'
				inputPlaceH='password'
				onLogin={(isLogged) => {
					return getEmail(isLogged);
				}}
			/>
			{passwordExists ? null : <p style={{ margin: '20px auto' }}>La contraseña es incorrecta</p>}
		</main>
	);
}
