import React from 'react';
import SlideShow from 'react-image-show';

type ItemDescription = {
	pictures: any[];
	title: string;
	price: number;
	condition: string;
};

function Item(props: ItemDescription) {
	const { pictures, title, price, condition } = props;
	const picture = pictures?.map((p) => p.url);

	return (
		<section>
			<SlideShow
				key={picture}
				images={picture}
				width='400px'
				imagesWidth='300px'
				imagesHeight='300px'
				imagesHeightMobile='56vw'
				thumbnailsWidth='920px'
				thumbnailsHeight='12vw'
				indicators
				thumbnails
				fixedImagesHeight
			></SlideShow>
			<h2>{title}</h2>
			<h4>${price}</h4>
			<p>{condition == 'new' ? 'Nuevo' : 'Usado'}</p>
		</section>
	);
}

export { Item };
