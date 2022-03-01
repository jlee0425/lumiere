export default {
	name: 'gallery',
	title: '갤러리',
	type: 'document',
	fields: [
		{ name: 'title', title: '제목', type: 'string' },
		{ name: 'slug', title: 'slug', type: 'slug' },
		{
			name: 'images',
			type: 'images',
			title: '사진첩',
		},
	],
	preview: {
		select: {
			images: 'images',
			image: 'images.0',
		},
		prepare(selection: { images: any; image: any }) {
			const { images, image } = selection;

			return {
				title: `Gallery block of ${Object.keys(images).length} images`,
				media: image,
			};
		},
	},
};
