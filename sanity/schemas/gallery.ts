export default {
	name: 'gallery',
	title: 'Gallery',
	type: 'object',
	fields: [
		{
			name: 'images',
			type: 'array',
			title: 'Images',
			of: [
				{
					name: 'image',
					type: 'image',
					title: 'Image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
						},
					],
				},
			],
			options: {
				layout: 'grid',
			},
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
				subtitle: `Alt text: ${image.alt}`,
				media: image,
			};
		},
	},
};
