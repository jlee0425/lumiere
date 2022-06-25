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
			title: 'title',
			image: 'images.0',
		},
		prepare(selection: { title: string; image: any }) {
			const { title, image } = selection;

			return {
				title,
				media: image,
			};
		},
	},
};
