import React, { useState } from 'react';
import css from './hamburguer-button.css';
import { useRecoilState } from 'recoil';
import { useBurguerButton } from '../../hooks';

type HamburguerBtn = {
	actionButton: () => void;
};

export function HamburguerButton(props) {
	const [isToggle, setToggle] = useBurguerButton();

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
