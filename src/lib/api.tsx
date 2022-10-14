const API_BASE_URL = 'https://lost-pet-dwfm7.herokuapp.com';

async function getPetsAroundTo(lat: number, lng: number) {
	const res = await fetch(`${API_BASE_URL}/pets-around?lat=${lat}&lng=${lng}`);
	const data = await res.json();
	return data;
}

export { getPetsAroundTo };
