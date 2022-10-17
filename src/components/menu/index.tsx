import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { burguerButtonState, useUserData, useGoTo } from 'hooks';
import { HamburguerButton } from 'ui/buttons/HamburguerButton';
import { Button } from 'ui/buttons/MainButton';
import css from './index.css';

export function Menu(): JSX.Element {
	const [isToggle, setToggle] = useRecoilState(burguerButtonState);
	const [userData, setUserData] = useUserData();
	const [goTo, setGoTo] = useGoTo();
	const navigate = useNavigate();

	const handleLink = (e) => {
		if (userData.token) {
			switch (e.target.id) {
				case 'my-data':
					navigate('my-data');
					break;
				case 'report-pet':
					navigate('report-pet');
					break;
				case 'my-pets':
					navigate('my-pets');
					break;
			}
		} else {
			setGoTo(`/${e.target.id}`);
			navigate('verify-email');
		}
	};

	const closeSession = () => {
		setUserData({});
	};

	return (
		<section className={css.root}>
			<HamburguerButton />
			<ul
				className={isToggle ? `${css.nav__ul} ${css.open}` : `${css.nav__ul}`}
				onClick={() => setToggle(!isToggle)}
			>
				<li className={css.nav__li}>
					<p className={css.link} onClick={handleLink} id='my-data'>
						Mis datos
					</p>
				</li>
				<li className={css.nav__li}>
					<p className={css.link} onClick={handleLink} id='my-pets'>
						Mis mascotas
					</p>
				</li>
				<li className={css.nav__li}>
					<p className={css.link} onClick={handleLink} id='report-pet'>
						Reportar mascota
					</p>
				</li>

				{userData.email ? (
					<div>
						<p>{userData.email}</p>
						<Button action={closeSession} children={'Cerrar sesion'} color={'yellow'} />
					</div>
				) : null}
			</ul>
		</section>
	);
}
