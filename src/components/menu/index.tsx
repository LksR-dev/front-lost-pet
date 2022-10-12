import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from '../../ui/nav';
import css from './index.css';

function Menu(): JSX.Element {
	const [isToggle, setToggle] = useState(false);
	const handleButton = (): void => {
		isToggle ? setToggle(false) : setToggle(true);
	};

	return (
		<section className={css.root}>
			<ul className={css.nav__ul} onClick={handleButton}>
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
		</section>
	);
}

export { Menu };
