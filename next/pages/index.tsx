import type { NextPage } from 'next';
import Process from '../components/home/Process';
import { usePhotos } from '../hooks/usePhotos';

const Home: NextPage = () => {
	const data = usePhotos();
	return <Process />;
};

export default Home;
