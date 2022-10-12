import React, { useState } from 'react';
import css from './hamburguer-button.css';

type HamburguerBtn = {
	actionButton: () => void;
};

function HamburguerButton(props: HamburguerBtn) {
	const [isToggle, setToggle] = useState(false);

	const handleButton = () => {};

	return (
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
	);
}
