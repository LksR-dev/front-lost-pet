import React, { useContext } from 'react';
import { SearchProduct } from '../index';

const ComponenteDos = () => {
	const dataFetch = useContext(SearchProduct);
	console.log(dataFetch);

	return <div>hola</div>;
};

export { ComponenteDos };
