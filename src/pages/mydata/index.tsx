import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from 'hooks';
import { CreateUserForm } from 'components/Forms/CreateUser';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function MyData() {
	const [userDataState, setUserData] = useUserData();
	const [hasUser, setHasUser] = useState(false);
	const [closeCard, setCloseCard] = useState(false);
	const navigate = useNavigate();

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
			{userDataState.token ? <h2>Mis datos</h2> : <h2>Registrarme</h2>}
			<CreateUserForm
				onLogin={(createUser) => {
					newUser(createUser);
				}}
			/>
			{hasUser && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Te has registrado con exito'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
