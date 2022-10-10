import React from 'react';
import css from './index.css';

export function Input() {
	return (
		<input
			className={css.root}
			type='text'
			name='q'
			placeholder='Busca productos, marcas y más'
			required
		/>
	);
}
