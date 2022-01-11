import type { NextPage } from 'next';
import { usePhotos } from '../hooks/usePhotos';

const Home: NextPage = () => {
	const data = usePhotos();
	return <div />;
};

export default Home;
