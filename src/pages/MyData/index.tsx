import React, { useState } from 'react';
import { useUserData } from 'hooks';
import { CreateUserForm } from 'components/Forms/CreateUser';
import { UpdateUserForm } from 'components/Forms/UpdateUser';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function MyData(): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [updateUser, setUpdateUser] = useState(false);
	const [closeCard, setCloseCard] = useState(false);
	const token: string = userDataState.token;

	const newOrUpdateUser = (hasNewUser): void => {
		if (hasNewUser.createUser) {
			setUpdateUser(true);
		}
		if (hasNewUser.updateUser) {
			setUpdateUser(true);
		}
	};
	const optionCard = (iconClose): void => {
		if (iconClose) {
			setCloseCard(true);
		}
	};
	return (
		<main className={css.main__container}>
			{token ? <h2>Mis datos</h2> : <h2>Registrarme</h2>}
			{token ? (
				<UpdateUserForm onLogin={(createUser) => newOrUpdateUser(createUser)} />
			) : (
				<CreateUserForm onLogin={(createUser) => newOrUpdateUser(createUser)} />
			)}
			{updateUser && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tus datos se cargaron correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
