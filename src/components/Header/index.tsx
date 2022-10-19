import React from 'react';
import { useUserData, useGoTo } from 'hooks';
import { useNavigate, Link } from 'react-router-dom';
import { Menu } from 'components/Menu';
import { CloseSessionButton } from 'ui/buttons/CloseSession';
import css from './index.css';

const defaultSvg = require('assets/logo.svg');

export function Header(): JSX.Element {
	const [userData, setUserData] = useUserData();
	const [goTo, setGoTo] = useGoTo();

	const navigate = useNavigate();
	const logo: string = defaultSvg.default;

	const handleLink = (e) => {
		if (userData.token) {
			switch (e.target.id) {
				case 'my-data':
					navigate('my-data');
					break;
				case 'report-update':
					navigate('report-update');
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

	return (
		<header className={css.root}>
			<Link to={'/'}>
				<img className={css.logo} src={logo} />
			</Link>

			<ul className={css.nav__ul}>
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
					<p className={css.link} onClick={handleLink} id='report-update'>
						Reportar mascota
					</p>
				</li>
				<li>{userData.token ? <CloseSessionButton /> : null}</li>
			</ul>
			<Menu />
		</header>
	);
}
