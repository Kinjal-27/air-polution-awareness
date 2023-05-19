import React, { useEffect, useState } from 'react';
import jsonPollutionData from 'assets/json/pollutionData.json';
const SensorList = () => {
	const [jsonData, setJsonData] = useState(jsonPollutionData);

	return (
		<div>
			<div className='hero--wrapper'>
				<div className='title'>
					<p className='font-size--30'>Air Polution Spreaded by Ahmedabad Cities </p>
					<hr className='title-hr' />
				</div>
				<div className='cards-wrapper'>
					{jsonData.data.sensors.map((items) => {
						const {
							id,
							location,
							longitude,
							latitude,
							sensor_name,
							sensor_type,
							severity,
							co,
							pm25,
							description
						} = items;
						return (
							<div key={id} className='card-conatiner--wrapper'>
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
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SensorList;
