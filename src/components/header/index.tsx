import React from 'react';
import { Link } from 'react-router-dom';
// COMPONETS
import { Menu } from '../menu';
// CSS AND MEDIA
import css from './index.css';
const defaultSvg = require('../../assets/logo.svg');

function Header(): JSX.Element {
	const logo: string = defaultSvg.default;
	return (
		<header className={css.root}>
			<img src={logo} alt='logo.svg' />
			<nav className={css.nav}>
				<Link className={css.link} to={'/'}>
					Mis datos
				</Link>
				<Link className={css.link} to={'/'}>
					Reportar mascotas
				</Link>
				<Link className={css.link} to={'/'}>
					Mis mascotas reportadas
				</Link>
			</nav>

			<Menu />
		</header>
	);
}

export { Header };
