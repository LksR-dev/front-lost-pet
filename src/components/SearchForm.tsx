import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/buttons';
import { Input } from '../ui/text-field';

function SearchForm() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const query: string = e.target.q.value;
		navigate(`search/${query}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input />
			<Button>BUSCAR</Button>
		</form>
	);
}

export { SearchForm };
