import React, { useRef, useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { usePetData, useUserData } from 'hooks';
import { InputLabel } from 'ui/inputs';
import css from './index.css';

const markerUrl = require('assets/location.svg');
const mapbox_token =
	'pk.eyJ1IjoibHVrc3JkZXYiLCJhIjoiY2w0eGVnNXlwMXo2YjNqbzBpeDk1azU3byJ9.ZvCSB9gZ8frvhwPPGuOnLA';
const Map = ReactMapboxGl({
	accessToken: mapbox_token,
});

export function Mapbox(props): JSX.Element {
	const locationMarker = markerUrl.default;
	const [loc, setLoc] = useState('');
	const [petData, setPetData] = usePetData();
	const [userData, setUserData] = useUserData();

	async function handleSearch(e) {
		e.preventDefault();
		const { features } = await (
			await fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${mapbox_token}`,
			)
		).json();
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
			<Map
				style='mapbox://styles/mapbox/streets-v9'
				containerStyle={{
					height: '300px',
					width: '300px',
				}}
				onClick={(_, mapData: any) => {
					const { lng, lat } = mapData.lngLat;
					setPetData({ ...petData, lng, lat });
				}}
				center={[petData.lng, petData.lat]}
				zoom={[15]}
			>
				<Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
					<Feature coordinates={[userData.lng, userData.lat]} />
				</Layer>
				<Marker coordinates={[petData.lng, petData.lat]} anchor='bottom' style={{ width: '50px' }}>
					<img className={css.marker} src={locationMarker} />
				</Marker>
			</Map>

			<InputLabel
				type='text'
				name='location'
				placeholder='Buenos Aires, Argentina'
				labelText='Busca por ciudad, barrio, provincia...'
				action={(e) => setLoc(e.target.value)}
				value={props.ubication ? props.ubication : null}
			/>
			<div onClick={handleSearch} className={css.green__button}>
				Marcar Ubicación
			</div>
		</div>
	);
}
