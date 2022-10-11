import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './index.css';

function Menu(): JSX.Element {
	const [isToggle, setToggle] = useState(false);
	console.log(isToggle);

	const handleButton = (): void => {
		isToggle ? setToggle(false) : setToggle(true);
	};

	return (
		<section>
			<div className={css.burger__container} onClick={handleButton}>
				<div
					className={
						isToggle ? `${css.burguer__btn} ${css.clicked}` : `${css.burguer__btn} ${css.unclicked}`
					}
				></div>
				<div
					className={
						isToggle ? `${css.burguer__btn} ${css.clicked}` : `${css.burguer__btn} ${css.unclicked}`
					}
				></div>
				<div
					className={
						isToggle ? `${css.burguer__btn} ${css.clicked}` : `${css.burguer__btn} ${css.unclicked}`
					}
				></div>
			</div>

			<nav className={css.menu}>
				<Link className={css.link} to={'my-data'}>
					Mis datos
				</Link>
				<Link className={css.link} to={'report-pet'}>
					Reportar mascotas
				</Link>
				<Link className={css.link} to={'my-pets'}>
					Mis mascotas reportadas
				</Link>
			</nav>
		</section>
	);
}

export { Menu };
