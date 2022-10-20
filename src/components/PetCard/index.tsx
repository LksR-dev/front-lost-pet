import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './index.css';
const defaultSvg = require('assets/pencil.svg');

type PetCard = {
	img: string;
	name: string;
	ubication: string;
	id: number;
};

export function PetCard(props: PetCard): JSX.Element {
	const [isMyPets, setIsMyPets] = useState(false);
	let location = useLocation();
	const navigate = useNavigate();
	const pathName = location.pathname;
	const pencil = defaultSvg.default;

	const goToReport = (petId): void => {
		navigate(`report-pet/${petId}`);
	};

	const goToEdit = (petId): void => {
		navigate(`/report-update/${petId}`);
	};

	useEffect(() => {
		if (pathName === '/my-pets') {
			setIsMyPets(true);
		} else {
			setIsMyPets(false);
		}
	}, [pathName]);

	return (
		<div className={css.card__container}>
			<div className={css.card__top}>
				<img className={css.card__img} src={props.img} />
			</div>

			<div className={css.card__bottom}>
				<div className={css.card__bottom__text}>
					<h2>{props.name}</h2>
					<p>{props.ubication}</p>
				</div>
				<div className={css.card__bottom__opt}>
					{isMyPets ? (
						<img onClick={() => goToEdit(props.id)} className={css.edit__pet} src={pencil} />
					) : (
						<p onClick={() => goToReport(props.id)} className={css.report__pet}>
							REPORTAR MASCOTA
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
