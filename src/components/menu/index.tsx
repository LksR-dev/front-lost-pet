import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { burguerButtonState, useUserData } from '../../hooks';
import { HamburguerButton } from '../../ui/buttons/HamburguerButton';
import { Button } from '../../ui/buttons/MainButton';
import css from './index.css';

function Menu(): JSX.Element {
	const [isToggle, setToggle] = useRecoilState(burguerButtonState);
	const [userData, setUserData] = useUserData();
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
			navigate('verify-email');
		}
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
					<p className={css.link} onClick={handleLink} id='report-pet'>
						Reportar mascota
					</p>
				</li>
				<li className={css.nav__li}>
					<p className={css.link} onClick={handleLink} id='my-pets'>
						Mis mascotas reportadas
					</p>
				</li>

				<div>
					<p>mailmockup@gmail.com</p>
					<Button action={() => {}} children={'Cerrar sesion'} color={'yellow'} />
				</div>
			</ul>
		</section>
	);
}

export { Menu };
