import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../menu';
import css from './index.css';

const defaultSvg = require('../../assets/logo.svg');

function Header(): JSX.Element {
	const logo: string = defaultSvg.default;
	return (
		<header className={css.root}>
			<Link to={'/'}>
				<img className={css.logo} src={logo} alt='logo.svg' />
			</Link>

			<ul className={css.nav__ul}>
				<li className={css.nav__li}>
					<Link className={css.link} to={'my-data'}>
						Mis datos
					</Link>
				</li>
				<li className={css.nav__li}>
					<Link className={css.link} to={'report-pet'}>
						Reportar mascota
					</Link>
				</li>
				<li className={css.nav__li}>
					<Link className={css.link} to={'my-pets'}>
						Mis mascotas
					</Link>
				</li>
			</ul>
			<Menu />
		</header>
	);
}

export { Header };
