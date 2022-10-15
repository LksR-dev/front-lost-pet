import React, { useState } from 'react';
import css from './index.css';

type PetCard = {
	img: string;
	name: string;
	ubication: string;
};

function PetCard(props: PetCard) {
	return (
		<div className={css.card__container}>
			<div className={css.card__top}>
				<img className={css.card__img} src={props.img} />
			</div>
			<div className={css.card__bottom}>
				<h2>{props.name}</h2>
				<p>{props.ubication}</p>
			</div>
		</div>
	);
}

export { PetCard };
