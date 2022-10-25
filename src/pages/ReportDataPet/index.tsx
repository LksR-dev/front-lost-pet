import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePet } from 'lib/api';
import { useUserData } from 'hooks';
import { ReportDataPetForm } from 'components/Forms/ReportData';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function ReportDataPet(): JSX.Element {
	const [userDataState, setUserData] = useUserData();
	const [hasPetReport, setHasPetReport] = useState(false);
	const [closeCard, setCloseCard] = useState(false);
	const [actualPet, setActualPet] = useState({ petname: '' });
	const { id } = useParams();

	useEffect(() => {
		getOnePet(Number(id), userDataState.token).then((res) =>
			setActualPet({
				petname: res.name,
			}),
		);
	}, [id]);
	const hasReport = (report: boolean): void => {
		if (report) setHasPetReport(true);
	};
	const optionCard = (iconClose): void => {
		if (iconClose) {
			setCloseCard(true);
		}
	};

	return (
		<main className={css.container}>
			<h2>Reportar info de {actualPet.petname}.</h2>
			<ReportDataPetForm onReportData={(report) => hasReport(report)} />

			{hasPetReport && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Reporte enviado exitosamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
