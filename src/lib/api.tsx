const API_BASE_URL = 'https://api-lostpet.onrender.com';

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

export async function updateDataUser(fullname: string, password, token: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/me`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
		body: JSON.stringify({
			fullname,
			password,
		}),
	});
	const data = await res.json();
	return data;
}

export async function getMyPets(token: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/me/pets`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
}

export async function postPet(
	petname: string,
	img: string,
	lat: number,
	lng: number,
	ubication: string,
	token: string,
): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/user/register-pet`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
		body: JSON.stringify({
			petname,
			img,
			lat,
			lng,
			ubication,
		}),
	});
	const data = await res.json();
	return data;
}

export async function getOnePet(id: number, token: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/pet/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
}

export async function updatePet(
	id: number,
	petname: string,
	img: string,
	lat: number,
	lng: number,
	ubication: string,
	token: string,
): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/me/pet/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
		body: JSON.stringify({
			petname,
			img,
			lat,
			lng,
			ubication,
		}),
	});
	const data = await res.json();
	return data;
}

export async function deletePet(id: number, token: string): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/me/pet/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
}

export async function reportDataPet(
	id: number,
	fullName: string,
	data: string,
	phone_number: number,
	token: string,
): Promise<any> {
	const res: Response = await fetch(`${API_BASE_URL}/report-pet`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `bearer ${token}`,
		},
		body: JSON.stringify({
			fullName,
			phone_number,
			petId: id,
			data,
		}),
	});
	const json = await res.json();
	return json;
}
