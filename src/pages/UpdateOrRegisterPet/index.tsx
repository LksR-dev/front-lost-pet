import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PetRegisterForm } from 'components/Forms/ReportPet';
import { UpdateDataPetForm } from 'components/Forms/UpdatePet';
import { WarningCard } from 'components/WarningCard';
import css from './index.css';

export function ReportOrUpdatePet(): JSX.Element {
	const [hasPet, setHasPet] = useState(null);
	const [hasPetDeleted, setHasPetDeleted] = useState(null);
	const [closeCard, setCloseCard] = useState(true);
	const { id } = useParams();

	const hasPetReportOrUpdated = (petReport): void => {
		console.log(petReport);
		petReport ? setHasPet(true) : setHasPet(false);
		setCloseCard(false);
		if (petReport.petDeleted) {
			setHasPetDeleted(true);
		}
	};
	const optionCard = (iconClose): void => {
		if (iconClose) {
			setCloseCard(true);
		}
	};

	return (
		<main className={css.container}>
			<h2 className={css.title}>Reportar mascota</h2>
			{id ? (
				<UpdateDataPetForm onUpdatePet={(petUpdated) => hasPetReportOrUpdated(petUpdated)} />
			) : (
				<PetRegisterForm
					onRegisterPet={(petReport) => {
						hasPetReportOrUpdated(petReport);
					}}
				/>
			)}

			{/****** REPORT PET WARNING CARD ******/}
			{hasPet && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tu mascota se reporto correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
			{!hasPet && !closeCard ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Hubo problemas para reportar tu mascota, es posible que la imagen sea demasiado grande.'
					buttonText='Ir al inicio'
				/>
			) : null}

			{/****** UPDATE PET WARNING CARD ******/}
			{hasPet && !closeCard && id ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tu mascota se actualizó correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
			{!hasPet && !closeCard && id ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Hubo problemas para actualizar tu mascota, es posible que la imagen sea demasiado grande.'
					buttonText='Ir al inicio'
				/>
			) : null}

			{/****** DELETE PET WARNING CARD ******/}
			{hasPetDeleted && !closeCard && id ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Tu mascota se borró correctamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
			{!hasPetDeleted && !closeCard && id ? (
				<WarningCard
					optionCard={(iconClose) => optionCard(iconClose)}
					title='Hubo problemas para borrar tu mascota, recargue la página e intente nuevamente.'
					buttonText='Ir al inicio'
				/>
			) : null}
		</main>
	);
}
