import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useUserData } from 'hooks';

import { Button } from './MainButton';

export function CloseSessionButton(): JSX.Element {
	const [userData, setUserData] = useUserData();
	const navigate = useNavigate();
	const closeSession = () => {
		setUserData({});
		navigate('/');
	};
	return <Button action={closeSession} children={'Cerrar sesion'} color={'yellow'} />;
}
