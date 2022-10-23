import React, { useState } from 'react';
import { PetRegisterForm } from 'components/Forms/ReportPet';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function ReportOrUpdatePet(): JSX.Element {
	const [petReported, setPetReported] = useState(null);
	const [closeCard, setCloseCard] = useState(true);

	const hasPetReport = (petReport): void => {
		petReport ? setPetReported(true) : setPetReported(false);
		setCloseCard(false);
	};
	const optionCard = (iconClose): void => {
		if (iconClose) {
			setCloseCard(true);
		}
	};

	return (
		<main className={css.container}>
			<h2 className={css.title}>Reportar mascota</h2>
			<PetRegisterForm
				onRegisterPet={(petReport) => {
					hasPetReport(petReport);
				}}
			/>
			{petReported && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tu mascota se reporto correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
			{!petReported && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Hubo problemas para reportar tu mascota, es posible que la imagen sea demasiado grande.'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
