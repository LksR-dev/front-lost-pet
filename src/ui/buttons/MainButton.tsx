import React from 'react';
import css from './index.css';

export function Button({ children }) {
	return <button className={css.btn}>{children}</button>;
}
