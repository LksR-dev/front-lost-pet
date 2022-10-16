import React from 'react';
import css from './card-result.css';

type Result = {
	title: string;
	price: number;
	thumbnail: string;
};

export function ShowResults(props: Result) {
	return (
		<section>
			<div className={css.card_container}>
				<div className={css.card_container__img}>
					<img className={css.card_img} src={props.thumbnail} />
				</div>
				<div className='card-container__data'>
					<h3>{props.title}</h3>
					<p>${props.price}</p>
				</div>
			</div>
		</section>
	);
}
