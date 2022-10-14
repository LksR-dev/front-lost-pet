import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getPetsAroundTo } from '../lib/api';

function useLatLngLocalStorage(userData?: { lat: number; lng: number }): JSON {
	localStorage.setItem('userData', JSON.stringify(userData));
	return JSON.parse(localStorage.getItem('userData'));
}

async function useGetPetsAround(lat, lng): Promise<any> {
	const pets = await getPetsAroundTo(lat, lng);
	return pets;
}

export { useLatLngLocalStorage, useGetPetsAround };
