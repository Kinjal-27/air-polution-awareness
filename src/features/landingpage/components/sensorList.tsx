import React, { useEffect, useState } from 'react';
import jsonPollutionData from 'assets/JSONDATA/pollutionData.json';

const SensorList = () => {
	const [jsonData, setJsonData] = useState(jsonPollutionData);

	return (
		<div>
			<div className='hero--wrapper'>
				<div className='cards-wrapper'>
					{jsonData.data.sensors.map((items, index) => {
						const { id, location, sensor_name, sensor_type, severity, co, pm25, temperature } = items;

						return (
							<div key={index} className='card-conatiner--wrapper'>
								<p className='location-title mb--10'>{location}</p>
								<p>
									<span className='labels'>Severity : </span>
									{severity}
								</p>
								<p>
									<span className='labels'>Sensor Name : </span>
									{sensor_name}
								</p>
								<p>
									<span className='labels'>Sensor Type : </span>
									{sensor_type}
								</p>
								<p>
									<span className='labels'>co : </span>
									{co}
								</p>
								<p>
									<span className='labels'>pm25 : </span>
									{pm25}
								</p>
								<p>
									<span className='labels'>Temperature : </span>
									{temperature}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SensorList;
