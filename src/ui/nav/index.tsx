import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.css';

type CustomLink = {
	children: string;
	to: string;
};

function CustomLink(props: CustomLink): JSX.Element {
	return (
		<Link className={css.link} to={props.to}>
			{props.children}
		</Link>
	);
}

export { CustomLink };
