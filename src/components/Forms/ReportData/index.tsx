import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoaderLogo } from 'components/Loader/LogoLoader';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { reportDataPet } from 'lib/api';
import { useUserData } from 'hooks';
import css from './index.css';

type ReportDataPetForm = {
	onReportData: (report: boolean) => any;
};

export function ReportDataPetForm(props: ReportDataPetForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();
		setIsLoading(true);
		const fullname: string = e.target.name.value;
		const phone_number = e.target.phone_number.value;
		const data = e.target.data.value;
		const token: string = userDataState.token;

		if (fullname && phone_number && data && token && id) {
			try {
				await reportDataPet(Number(id), fullname, data, phone_number, token);
				props.onReportData(true);
				setIsLoading(false);
			} catch {
				props.onReportData(false);
				setIsLoading(false);
			}
		}
	};

	return (
		<>
			{isLoading ? (
				<LoaderLogo />
			) : (
				<form className={css.form__container} onSubmit={handleSubmit}>
					<InputLabel labelText='TU NOMBRE:' name='name' type='text' placeholder='Cosme Fulanito' />
					<InputLabel
						labelText='TU TELÉFONO:'
						name='phone_number'
						type='number'
						placeholder='66677788'
					/>
					<label className={css.label__container}>
						INFORMACIÓN:
						<textarea
							className={css.text}
							name='data'
							id='data'
							placeholder='Vi a la mascota corriendo por...'
						></textarea>
					</label>
					<Button color='dark__blue' children='Enviar' />
				</form>
			)}
		</>
	);
}
