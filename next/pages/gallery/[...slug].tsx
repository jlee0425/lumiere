/* eslint-disable @next/next/no-img-element */
import type { GetServerSidePropsContext } from 'next/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageGalleryModal from '../../components/ImageGallery';
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
	const firstImageKey = useMemo(() => images?.[0]?.key, [images]);
	const [slideIdx, setSlideIdx] = useState(-1);
	const handleOpenModal = useCallback(
		(idx: number) => () => setSlideIdx(idx),
		[]
	);

	const handleCloseModal = useCallback((e: any) => {
		setSlideIdx(-1);
	}, []);

	useEffect(() => {
		setSlideIdx(-1);
	}, [firstImageKey]);

	return (
		<div className="w-full">
			<Masonry
				className="flex w-full space-x-2 p-2 md:w-[1280px] md:m-auto"
				columnClassName="space-y-2"
				breakpointCols={{ default: 3, 768: 2 }}
			>
				{images.map(({ key, url }, idx) => (
					<div key={key} className={`w-full relative`}>
						<img
							src={url + '?w=600'}
							alt=""
							onContextMenu={(e) => e.preventDefault()}
							className="object-contain cursor-pointer"
							onClick={handleOpenModal(idx)}
						/>
					</div>
				))}
			</Masonry>
			<ImageGalleryModal
				isOpen={slideIdx !== -1}
				onRequestClose={handleCloseModal}
				images={images.map((i) => i.url)}
				initialSlide={slideIdx}
			/>
		</div>
	);
};

export default GalleryPage;
