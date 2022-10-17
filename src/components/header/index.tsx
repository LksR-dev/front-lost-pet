import React from 'react';
import { useUserData } from 'hooks';
import { Link } from 'react-router-dom';
import { Menu } from 'components/menu';
import { CloseSessionButton } from 'ui/buttons/CloseSession';
import css from './index.css';

const defaultSvg = require('../../assets/logo.svg');

export function Header(): JSX.Element {
	const logo: string = defaultSvg.default;
	const [userData, setUserData] = useUserData();

	return (
		<header className={css.root}>
			<Link to={'/'}>
				<img className={css.logo} src={logo} />
			</Link>

			<ul className={css.nav__ul}>
				<li className={css.nav__li}>
					<Link className={css.link} to={'my-data'}>
						Mis datos
					</Link>
				</li>
				<li className={css.nav__li}>
					<Link className={css.link} to={'my-pets'}>
						Mis mascotas
					</Link>
				</li>
				<li className={css.nav__li}>
					<Link className={css.link} to={'report-pet'}>
						Reportar mascota
					</Link>
				</li>
				<li>{userData.token ? <CloseSessionButton /> : null}</li>
			</ul>
			<Menu />
		</header>
	);
}
