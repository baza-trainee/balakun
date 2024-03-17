'use client';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import MarkerIcon from '@/node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '@/node_modules/leaflet/dist/images/marker-shadow.png';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
	return (
		<section className='mb-32 mx-[210px]'>
			<h3 className='mb-16 text-4xl font-bold text-center'>
				Mentor&apos;s <span className='text-red-900'>Map</span>
			</h3>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={6}
				scrollWheelZoom={false}
				className='w-full h-[660px]'
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker
					icon={
						new L.Icon({
							iconUrl: MarkerIcon.src,
							iconRetinaUrl: MarkerIcon.src,
							iconSize: [25, 41],
							iconAnchor: [12.5, 41],
							popupAnchor: [0, -41],
							shadowUrl: MarkerShadow.src,
							shadowSize: [41, 41],
						})
					}
					position={[51.505, -0.09]}
				>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
};

export default Map;