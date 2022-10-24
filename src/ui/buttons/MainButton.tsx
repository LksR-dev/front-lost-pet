import React from 'react';
import css from './main-button.css';

type MainButton = {
	children: string;
	color: 'dark__blue' | 'yellow' | 'gray';
	action?: () => void;
};

export function Button(props: MainButton) {
	const backgroundColor = () => {
		if (props.color === 'dark__blue') {
			return css.dark__blue;
		} else if (props.color === 'yellow') {
			return css.yellow;
		} else {
			return css.gray;
		}
	};

	return (
		<button
			onClick={() => (props.action ? props.action() : null)}
			className={`${css.btn} ${backgroundColor()}`}
		>
			{props.children}
		</button>
	);
}
