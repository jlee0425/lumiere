export default {
	name: 'images',
	type: 'array',
	of: [
		{
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	options: {
		layout: 'grid',
	},
};
