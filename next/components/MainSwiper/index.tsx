import React from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageProps } from '../../pages';
import Image from 'next/image';

type Props = {
	images: ImageProps[];
};

const MainSwiper = ({ images }: Props) => {
	return (
		<Swiper
			effect="fade"
			pagination={{ clickable: true, dynamicBullets: true }}
			preloadImages
			modules={[EffectFade, Pagination, Autoplay]}
			loop
			autoplay={{
				delay: 10000,
			}}
		>
			{images.map((image) => (
				<SwiperSlide key={image.key}>
					<div className="h-screen w-screen">
						<Image
							src={image.url}
							layout="fill"
							objectFit="cover"
							alt={image.url}
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default MainSwiper;
