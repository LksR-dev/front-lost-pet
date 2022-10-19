import React, { useState } from 'react';
import { useUserData } from 'hooks';
import { CreateUserForm } from 'components/Forms/CreateUser';
import { UpdateUserForm } from 'components/Forms/UpdateUser';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function MyData() {
	const [userDataState, setUserData] = useUserData();
	const [hasNewUser, setHasUser] = useState(false);
	const [closeCard, setCloseCard] = useState(false);
	const token = userDataState.token;

	const newUser = (hasNewUser) => {
		if (hasNewUser.createUser) {
			setHasUser(true);
		}
	};
	const optionCard = (iconClose) => {
		if (iconClose) {
			setCloseCard(true);
		}
	};
	return (
		<main className={css.main__container}>
			{token ? <h2>Mis datos</h2> : <h2>Registrarme</h2>}
			{token ? (
				<UpdateUserForm onLogin={(createUser) => newUser(createUser)} />
			) : (
				<CreateUserForm onLogin={(createUser) => newUser(createUser)} />
			)}
			{hasNewUser && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tus datos se cargaron correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
