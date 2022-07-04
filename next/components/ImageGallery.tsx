import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactModal, { Props } from 'react-modal';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdClose } from 'react-icons/io';

type ModalProps = {
	images: string[];
	initialSlide: number;
};

const ImageGalleryModal = ({
	isOpen,
	onRequestClose,
	images,
	initialSlide,
}: Props & ModalProps) => {
	const [thumbnailSwiper, setThumbnailSwiper] = useState<any>(null);

	useEffect(() => {
		return () => setThumbnailSwiper(null);
	}, [thumbnailSwiper]);

	return (
		<ReactModal
			isOpen={isOpen}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			onRequestClose={onRequestClose}
			style={{
				content: {
					background: 'black',
					border: 'none',
					width: '100%',
					height: '100%',
					inset: 0,
				},
				overlay: { background: 'black' },
			}}
		>
			<div className="h-full w-full flex flex-col space-y-4 pt-12">
				<IoMdClose
					className="text-white text-3xl m-auto cursor-pointer"
					onClick={onRequestClose}
				/>
				{images && (
					<>
						<Swiper
							modules={[Navigation, Thumbs]}
							thumbs={{ swiper: thumbnailSwiper }}
							navigation
							initialSlide={initialSlide}
							className="h-4/5 w-full"
						>
							{images.map((image, idx) => (
								<SwiperSlide key={idx} className="h-full w-full">
									<div className="relative h-full w-full">
										<Image
											src={image + '?w=768'}
											layout="fill"
											objectFit="contain"
											alt={image}
											placeholder="blur"
											blurDataURL={image}
											objectPosition="center"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<Swiper
							modules={[Thumbs]}
							watchSlidesProgress
							onSwiper={setThumbnailSwiper}
							className="h-48 w-4/5 cursor-pointer"
							slidesPerView={4}
							initialSlide={initialSlide}
							centeredSlides
							spaceBetween={12}
						>
							{images.map((image, idx) => (
								<SwiperSlide key={idx}>
									<div className="relative w-full h-full">
										<Image
											src={image + '?w=150'}
											layout="fill"
											objectFit="contain"
											alt={image}
											objectPosition="center"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</>
				)}
			</div>
		</ReactModal>
	);
};

export default ImageGalleryModal;
