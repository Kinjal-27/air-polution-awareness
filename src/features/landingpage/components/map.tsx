import GoogleMapReact from 'google-map-react';
// const jsonPollutionData = require('../../../assets/JSONDATA/pollutionData.json');
import jsonPollutionData from '../../../assets/JSONDATA/pollutionData.json';
import { IAirPollutionData } from 'shared/interface/state';
// import Marker from './marker';

interface IMarkerProps {
	id?: number;
	location: string;
	latitude: number;
	longitude: number;
	pm25: number;
	co: number;
	severity?: string;
	sensor_name: string;
	sensor_type: string;
	installation_date?: string;
	temperature?: number;
	description?: string;
}

const SimpleMap = () => {
	const defaultProps = {
		center: {
			lat: 23.0379,
			lng: 72.5101
		},
		zoom: 12
	};

	const Marker = ({ location }: IMarkerProps) => {
		return <div style={{ color: 'red', fontSize: '24px' }}>{location}</div>;
	};

	return (
		// Important! Always set the container height explicitly
		<div className='map-wrapper position--relative'>
			<div style={{ height: '600px', width: '1100px', margin: 'auto' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: '' }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					{jsonPollutionData.data.sensors.map((items: IAirPollutionData, index) => {
						const { location, sensor_name, sensor_type, severity, co, pm25, longitude, latitude } = items;
						return (
							<Marker
								key={index}
								location={location}
								longitude={longitude}
								latitude={latitude}
								sensor_name={sensor_name}
								sensor_type={sensor_type}
								severity={severity}
								co={co}
								pm25={pm25}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		</div>
	);
};

export default SimpleMap;
