import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { burguerButtonState } from '../../atoms';
import { HamburguerButton } from '../../ui/buttons/HamburguerButton';
import css from './index.css';

function Menu(): JSX.Element {
	const [isToggle, setToggle] = useRecoilState(burguerButtonState);
	return (
		<section className={css.root}>
			<HamburguerButton />

			<ul
				className={isToggle ? `${css.nav__ul} ${css.open}` : `${css.nav__ul}`}
				onClick={() => setToggle(!isToggle)}
			>
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
