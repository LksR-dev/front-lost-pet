import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/buttons/MainButton';
import css from './index.css';

const defaultSvg = require('assets/bones-pet.svg');

type WarningCard = {
	title: string;
	buttonText: string;
	optionCard: (iconClose) => void;
};

export function WarningCard(props: WarningCard) {
	const bonesPet = defaultSvg.default;
	const navigate = useNavigate();
	const closeCard = () => props.optionCard(true);
	const goTo = (): void => navigate('/');

	return (
		<section className={css.card__container}>
			<div onClick={closeCard} className={css.icon__container}>
				<img src={bonesPet} />
			</div>
			<h3 className={css.title}>{props.title}</h3>
			<Button action={goTo} children={props.buttonText} color='green' />
		</section>
	);
}
