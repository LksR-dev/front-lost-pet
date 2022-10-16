import React from 'react';
import css from './index.css';

type Input = {
	type: string;
	name: string;
	placeholder: string;
	// required: boolean;
};

export function Input(props: Input) {
	return (
		<input
			className={css.root}
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			required
		/>
	);
}
