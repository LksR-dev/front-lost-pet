import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { InputLabel } from 'ui/inputs';
import css from './index.css';

type Mapbox = {
	geoLoc: (placeName, lat, lng) => void;
};

const mapbox_token =
	'pk.eyJ1IjoiYWx2YXJvYmFzdGlhIiwiYSI6ImNreTByc3pzMTA0MWcydmxkemM1bDY5aTMifQ.y9exP2YyY3nQ3-qbR2rw1A';
mapboxgl.accessToken = mapbox_token;

export function Mapbox(props: Mapbox) {
	const [loc, setLoc] = useState('');
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	}, [mapContainer]);

	async function handleSearch(e) {
		e.preventDefault();
		const { features } = await (
			await fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapbox_token}`,
			)
		).json();

		console.log(features);

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
		props.geoLoc(
			features[0]['place_name'],
			features[0].geometry.coordinates[1],
			features[0].geometry.coordinates[0],
		);
	}

	return (
		<div className={css.container}>
			<link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
			<div ref={mapContainer} className={css.map__container} />
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
