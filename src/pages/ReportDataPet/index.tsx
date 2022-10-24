import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deletePet, getOnePet } from 'lib/api';
import { useUserData } from 'hooks';
import { ReportDataPetForm } from 'components/Forms/ReportData';

export function ReportDataPet() {
	const [userDataState, setUserData] = useUserData();
	const { id } = useParams();
	const [actualPet, setActualPet] = useState({
		petname: '',
	});

	useEffect(() => {
		getOnePet(Number(id), userDataState.token).then((res) =>
			setActualPet({
				petname: res.name,
			}),
		);
	}, [id]);
	return (
		<main>
			<h2 style={{ textAlign: 'center', margin: '40px 0 0' }}>
				Reportar info de {actualPet.petname}.
			</h2>
			<ReportDataPetForm onReportData={() => {}} />
		</main>
	);
}
