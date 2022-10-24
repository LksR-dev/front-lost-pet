import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { reportDataPet } from 'lib/api';
import { useUserData } from 'hooks';
import css from './index.css';

type ReportDataPetForm = {
	onReportData: ({}) => any;
};

export function ReportDataPetForm(props: ReportDataPetForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const { id } = useParams();

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		const fullname: string = e.target.name.value;
		const phone_number = e.target.phone_number.value;
		const data = e.target.data.value;
		const token: string = userDataState.token;

		if (fullname && phone_number && data && token && id) {
			const petReported = await reportDataPet(Number(id), fullname, data, phone_number, token);
			console.log(petReported);
		}
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel labelText='TU NOMBRE:' name='name' type='text' placeholder='Cosme Fulanito' />
			<InputLabel
				labelText='TU TELÉFONO:'
				name='phone_number'
				type='number'
				placeholder='66677788'
			/>
			<textarea
				className={css.text}
				name='data'
				id='data'
				placeholder='Vi a la mascota corriendo por...'
			></textarea>
			<Button color='green' children='Enviar' />
		</form>
	);
}