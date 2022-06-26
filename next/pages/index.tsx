import MainSwiper from '../components/MainSwiper';
import { GET_LANDING_IMAGES } from '../constants/queries';
import customAxios from '../lib/axios';
import { SanityImage } from '../types/sanity';

export type ImageProps = {
	key: string;
	url: string;
	isPortrait: boolean;
	width: number;
	height: number;
};
export const getServerSideProps = async () => {
	const { data } = await customAxios.post('', {
		query: GET_LANDING_IMAGES,
	});

	const images = data.data.allGallery[0].images.map(
		({ _key, asset }: SanityImage) => ({
			key: _key,
			url: asset.url,
			isPortrait: asset.metadata.dimensions.aspectRatio <= 1,
			width: asset.metadata.dimensions.width,
			height: asset.metadata.dimensions.height,
		})
	);

	return {
		props: {
			images,
		},
	};
};

const Home = ({ images }: { images: ImageProps[] }) => {
	return (
		<div className="relative">
			<MainSwiper images={images} />
		</div>
	);
};

export default Home;
