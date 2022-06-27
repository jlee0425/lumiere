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
			url: `${asset.url}?w=375`,
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

// const getHeight = (height: number, isPortait: boolean) =>
// 	isPortait ? `h-[${height / 2}px]` : `h-[${height / 5}px]`;
const GalleryPage = ({ images }: { images: GalleryImage[] }) => {
	return (
		<div className="w-full">
			<Masonry
				className="flex w-full space-x-2 p-2"
				columnClassName="space-y-2"
				breakpointCols={{ default: 3, 768: 2 }}
			>
				{images.map(({ key, url, height, isPortrait }) => (
					<div
						key={key}
						className={`w-full ${
							isPortrait ? 'h-[256px]' : 'h-[128px]'
						} relative`}
					>
						<Image
							src={url}
							alt=""
							onContextMenu={(e) => e.preventDefault()}
							objectFit="cover"
							layout="fill"
							loading="eager"
						/>
					</div>
				))}
			</Masonry>
		</div>
	);
};

export default GalleryPage;
