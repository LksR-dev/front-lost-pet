import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from 'components/Forms/LoginForm';
import { LoaderLogo } from 'components/Loader/LogoLoader';
import css from './index.css';

export function EmailLogin(): JSX.Element {
	const [loader, setLoader] = useState(false);
	const navigate = useNavigate();

	const getEmail = async (data) => {
		if (data.userData == null) {
			navigate('/my-data');
		}
		if (data.userData !== null) {
			navigate('/login');
		}
		if (data.loader) {
			setLoader(true);
		}
	};

	return (
		<main className={css.main__container}>
			<LoginForm
				labelText='Email: '
				inputName='email'
				inputType='email'
				inputPlaceH='email@email.com'
				onLogin={(data) => {
					return getEmail(data);
				}}
			/>
			{loader ? <LoaderLogo /> : null}
		</main>
	);
}
