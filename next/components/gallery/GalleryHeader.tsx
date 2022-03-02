import Link from 'next/link';
import React from 'react';

interface Props {
	galleryList: { _id: string; title: string; slug: { current: string } }[];
}

const GalleryHeader = ({ galleryList }: Props) => {
	return (
		<div className="flex justify-evenly items-center w-3/4 mx-auto">
			{galleryList?.map(({ title, slug, _id }) => (
				<Link href={`/gallery/${slug.current}`} passHref key={_id}>
					<span className="underline cursor-pointer text-gray-700 drop-shadow-xl decoration-eggshell-400 decoration-4 hover:decoration-eggshell-700 underline-offset-4 w-20 text-center text-lg ">
						{title}
					</span>
				</Link>
			))}
		</div>
	);
};

export default GalleryHeader;
