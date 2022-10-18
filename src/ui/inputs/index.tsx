import React from 'react';
import css from './index.css';

type Input = {
	type: string;
	name: string;
	placeholder: string;
	// required: boolean;
	labelText: string;
};

export function InputLabel(props: Input) {
	return (
		<label className={css.container}>
			{props.labelText}
			<input
				className={css.root}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				required
			/>
		</label>
	);
}
