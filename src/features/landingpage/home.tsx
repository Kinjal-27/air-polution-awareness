import { useState } from 'react';
import SimpleMap from './components/map';
import SensorList from './components/sensorList';
import './styles/home.scss';
import Header from 'shared/components/header/header';

const Home = () => {
	const [isMap, setIsMap] = useState(false);
	return (
		<div className='home-screen-wrapper'>
			<Header />
			<div>
				<div className='title'>
					<p className='font-size--30'>Air Pollution SpotLight</p>
					<div className='map--title cursor--pointer' onClick={() => setIsMap(!isMap)}>
						Navigetting Map
					</div>
				</div>
				<hr className='title-hr' />
			</div>
			{!isMap && <SensorList />}
			{isMap && <SimpleMap />}
		</div>
	);
};

export default Home;
