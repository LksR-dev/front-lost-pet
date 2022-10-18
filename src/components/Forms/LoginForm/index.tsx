import React from 'react';
import { InputLabel } from 'ui/inputs';
import { Button } from 'ui/buttons/MainButton';
import { checkEmail, getToken } from 'lib/api';
import { useUserData } from 'hooks';
import css from './index.css';

type LoginForm = {
	labelText: string;
	inputName: 'email' | 'password';
	inputType: 'email' | 'password';
	inputPlaceH: string;
	onLogin: ({}) => any;
};

export function LoginForm(props: LoginForm): JSX.Element {
	const [userDataState, setUserData] = useUserData();

	const handleSubmit = async (e): Promise<void> => {
		e.preventDefault();

		if (e.target.email) {
			const email: string = e.target.email.value;
			const resp = await checkEmail(email);
			// IF EMAIL EXISTS
			if (resp !== null) {
				const userData = {
					email: resp.email,
					fullname: resp.fullname,
				};
				setUserData({ ...userDataState, email, fullname: resp.fullname });
				props.onLogin({ userData });
				// IF EMAIL NOT EXISTS
			} else {
				setUserData({ ...userDataState, email });
				props.onLogin({ userData: null });
			}
		}
		if (e.target.password) {
			const password: string = e.target.password.value;
			const resp: string = await getToken(userDataState.email, password);

			if (resp === 'Email or password incorrect') {
				props.onLogin({ login: false });
			} else {
				props.onLogin({ login: true });
				setUserData({ ...userDataState, token: resp });
			}
		}
	};

	return (
		<form className={css.form__container} onSubmit={handleSubmit}>
			<InputLabel
				labelText={props.labelText}
				name={props.inputName}
				type={props.inputType}
				placeholder={props.inputPlaceH}
			/>
			<Button color='green' children='Siguiente' />
		</form>
	);
}
