import React from 'react';
import { CreateUserForm } from 'components/Forms/ReportPet';
import css from './index.css';

export function ReportOrUpdatePet() {
	return (
		<main>
			<h2 className={css.title}>Reportar mascota</h2>
			<CreateUserForm onLogin={() => {}} />
		</main>
	);
}
