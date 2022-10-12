import React, { useState } from 'react';
import css from './hamburguer-button.css';
import { useRecoilState } from 'recoil';
import { burguerButtonState } from '../../atoms';

type HamburguerBtn = {
	actionButton: () => void;
};

function HamburguerButton(props) {
	const [isToggle, setToggle] = useRecoilState(burguerButtonState);

	return (
		<div className={css.burger__container} onClick={() => setToggle(!isToggle)}>
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

export { HamburguerButton };
