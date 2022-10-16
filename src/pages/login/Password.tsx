import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/forms/login-form';

export function PasswordLogin(): JSX.Element {
	const [emailExists, setEmailExists] = useState(false);
	const navigate = useNavigate();

	const getEmail = async (userAccount) => {
		if (userAccount == null) {
			navigate('my-data');
		}
		if (userAccount !== null) {
			setEmailExists(true);
		}
	};

	return (
		<main>
			<LoginForm
				labelText='Password: '
				inputName='password'
				inputType='password'
				inputPlaceH='password'
				onLogin={(userAccount) => {
					return getEmail(userAccount);
				}}
			/>
		</main>
	);
}
