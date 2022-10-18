import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from 'hooks';
import { CreateUserForm } from 'components/Forms/CreateUser';

export function MyData() {
	const [userDataState, setUserData] = useUserData();
	const [hasUser, setHasUser] = useState(false);
	const navigate = useNavigate();
	const newUser = (hasNewUser) => {
		if (hasNewUser.createUser) {
			setHasUser(true);
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
	};

	return (
		<main>
			{userDataState.token ? <h2>Mis datos</h2> : <h2>Registrarme</h2>}
			<CreateUserForm
				onLogin={(createUser) => {
					newUser(createUser);
				}}
			/>
			{hasUser ? <p>Te has registrado con exito, aqui iria la card</p> : null}
		</main>
	);
}
