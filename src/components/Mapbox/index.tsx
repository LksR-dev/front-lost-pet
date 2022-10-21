import React, { useRef, useEffect, useState } from 'react';
import { usePetData } from 'hooks';
import mapboxgl from 'mapbox-gl';
import { InputLabel } from 'ui/inputs';
import css from './index.css';

const mapbox_token =
	'pk.eyJ1IjoibHVrc3JkZXYiLCJhIjoiY2w0eGVnNXlwMXo2YjNqbzBpeDk1azU3byJ9.ZvCSB9gZ8frvhwPPGuOnLA';
mapboxgl.accessToken = mapbox_token;

export function Mapbox(): JSX.Element {
	const [loc, setLoc] = useState('');
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);
	const [petData, setPetData] = usePetData();

	function addMarker() {
		const marker = new mapboxgl.Marker({ draggable: true })
			.setLngLat([lng, lat])
			.addTo(map.current);
		setPetData({ ...petData, lng, lat });
		return marker;
	}

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	}, [mapContainer]);

	useEffect(() => {
		map.current.on('click', (e) => {
			setLng(e.lngLat.lng);
			setLat(e.lngLat.lat);
		});
	}, [lng, lat]);

	async function handleSearch(e) {
		e.preventDefault();
		const { features } = await (
			await fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapbox_token}`,
			)
		).json();

		if (!map.current) return; // wait for map to initialize
		await map.current.flyTo({
			center: [features[0].geometry.coordinates[0], features[0].geometry.coordinates[1]],
			zoom: 15,
			speed: 0.6,
			curve: 2,
		});
		await setLng(features[0].geometry.coordinates[0]);
		await setLat(features[0].geometry.coordinates[1]);

		// ACA SETEO EL NAME Y LAS COORDENADAS
		setPetData({
			...petData,
			ubication: features[0]['place_name'],
			lat: features[0].geometry.coordinates[1],
			lng: features[0].geometry.coordinates[0],
		});
	}

	return (
		<div className={css.container}>
			<link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
			<div onClick={addMarker} ref={mapContainer} className={css.map__container} />
			<div className={css.search__container}>
				<InputLabel
					type='text'
					name='location'
					placeholder='Buenos Aires, Argentina'
					labelText='Busca por ciudad, barrio, provincia...'
					action={(e) => setLoc(e.target.value)}
				/>
				<div onClick={handleSearch} className={css.green__button}>
					Marcar Ubicación
				</div>
			</div>
		</div>
	);
}
