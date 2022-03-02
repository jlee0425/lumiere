import Link from 'next/link';
import React from 'react';
import { GALLERY_LIST } from '../../constants/constants';

interface Props {
	curPath: string;
}

const GalleryHeader = ({ curPath }: Props) => {
	return (
		<div className="flex justify-evenly items-center w-3/4 mx-auto mb-10">
			{GALLERY_LIST.map(({ title, slug, _id }) => (
				<Link href={`/gallery/${slug.current}`} passHref key={_id}>
					<span
						className={`underline cursor-pointer text-gray-700 drop-shadow-xl ${
							curPath === slug.current
								? 'decoration-eggshell-700'
								: 'decoration-eggshell-400'
						} decoration-4  underline-offset-4 w-20 text-center text-lg md:text-xl`}
					>
						{title}
					</span>
				</Link>
			))}
		</div>
	);
};

export default GalleryHeader;
