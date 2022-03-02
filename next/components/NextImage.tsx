import Image from 'next/image';
import React from 'react';

interface Props {
	src: string;
	w: number;
	h: number;
	alt?: string;
}

const NextImage = ({ src, w, h, alt }: Props) => {
	return (
		<div className={`relative`} style={{ width: `${w}rem`, height: `${h}rem` }}>
			<Image src={src} layout="fill" alt={alt} />
		</div>
	);
};

export default NextImage;
