import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components/forms/login-form';

export function EmailLogin(): JSX.Element {
	const navigate = useNavigate();

	const getEmail = async (userEmail) => {
		if (userEmail.userData == null) {
			navigate('/my-data');
		}
		if (userEmail.userData !== null) {
			navigate('/login');
		}
	};

	return (
		<main>
			<LoginForm
				labelText='Email: '
				inputName='email'
				inputType='email'
				inputPlaceH='email@email.com'
				onLogin={(userEmail) => {
					return getEmail(userEmail);
				}}
			/>
		</main>
	);
}
