const API_BASE_URL = 'https://lost-pet-dwfm7.herokuapp.com';

export async function getPetsAroundTo(lat: number, lng: number): Promise<[]> {
	const res: Response = await fetch(`${API_BASE_URL}/pets-around?lat=${lat}&lng=${lng}`);
	const data = await res.json();
	return data;
}

export async function checkEmail(email: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/auth/email`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
		}),
	});
	const data = await res.json();
	return data;
}

export async function userAuth(email: string, password: string, fullName: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			fullName,
			email,
			password,
		}),
	});
	const data = await res.json();
	return data;
}

export async function getToken(email: string, password: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/auth/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const data = await res.json();
	return data;
}
