/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Masonry from 'react-masonry-css';
import GalleryHeader from '../../components/gallery/GalleryHeader';
import { GET_GALLERY_IMAGES, GET_GALLERY_LIST } from '../../constants/queries';
import customAxios from '../../lib/axios';

type SanityImage = {
	_key: string;
	asset: {
		url: string;
		metadata: { dimensions: { aspectRatio: number } };
	};
};
export const getStaticPaths = async () => {
	const { data } = await customAxios.post('', {
		query: GET_GALLERY_LIST,
	});

	const paths = data.data.allGallery.map(
		({ slug }: { slug: { current: string } }) => ({
			params: { slug: slug.current },
		})
	);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const { data } = await customAxios.post('', {
		query: GET_GALLERY_IMAGES,
		variables: { slug: params.slug },
	});

	const images = data.data.allGallery[0].images.map(
		({ _key, asset }: SanityImage) => ({
			key: _key,
			url: asset.url,
			isPortrait: asset.metadata.dimensions.aspectRatio <= 1,
		})
	);

	return {
		props: {
			curPath: params.slug,
			images,
		},
		revalidate: 10,
	};
};

const GalleryPage = ({
	curPath,
	images,
}: {
	curPath: string;
	images: { key: string; url: string; isPortrait: boolean }[];
}) => {
	return (
		<>
			<GalleryHeader curPath={curPath} />
			<Masonry
				breakpointCols={{ default: 3, 768: 2, 360: 1 }}
				className="flex w-auto"
				columnClassName="bg-clip-padding break-inside-avoid"
			>
				{images.map(({ key, url, isPortrait }) => (
					<div className={`p-2 relative`} key={key}>
						<img src={url} alt="" onContextMenu={(e) => e.preventDefault()} />
					</div>
				))}
			</Masonry>
		</>
	);
};

export default GalleryPage;
