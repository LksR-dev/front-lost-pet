import React from 'react';
import css from './index.css';

type Input = {
	type: string;
	name: string;
	placeholder: string;
	labelText: string;
	action?: (e) => void;
	value?: string;
};

export function InputLabel(props: Input) {
	return (
		<label className={css.container}>
			{props.labelText}
			<input
				onChange={props.action}
				className={css.root}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				defaultValue={props.value}
				required
			/>
		</label>
	);
}
