import SensorList from './components/sensorList';
import './styles/home.scss';
import Header from 'shared/components/header/header';

const Home = () => {
	return (
		<div className='home-screen-wrapper'>
			<Header />
			<SensorList />
		</div>
	);
};

export default Home;
