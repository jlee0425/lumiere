/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import type { GetServerSidePropsContext } from 'next/types';
import Masonry from 'react-masonry-css';
import { GET_GALLERY_IMAGES } from '../../constants/queries';
import customAxios from '../../lib/axios';
import { GalleryImage, SanityImage } from '../../types/sanity';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { params } = ctx;
	const { data } = await customAxios.post('', {
		query: GET_GALLERY_IMAGES,
		variables: { slug: ((params?.slug as string[]) || []).join('-') },
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

const GalleryPage = ({ images }: { images: GalleryImage[] }) => {
	return (
		<div className="w-full">
			<Masonry
				className="flex w-full space-x-2 p-2"
				columnClassName="space-y-2"
			>
				{images.map(({ key, url, isPortrait }) => (
					<div
						key={key}
						className={`w-full ${
							isPortrait ? 'h-[280px]' : 'h-[140px]'
						} relative`}
					>
						<Image
							src={url}
							alt=""
							onContextMenu={(e) => e.preventDefault()}
							objectFit="cover"
							layout="fill"
						/>
					</div>
				))}
			</Masonry>
		</div>
	);
};

export default GalleryPage;
