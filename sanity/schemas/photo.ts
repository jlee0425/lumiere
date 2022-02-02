export default {
	name: 'photo',
	title: '사진',
	type: 'document',
	fields: [
		{ name: 'photo', type: 'image', title: '사진' },
		{
			name: 'tag',
			type: 'array',
			title: '태그',
			of: [{ type: 'reference', to: [{ type: 'tag' }] }],
		},
	],
};
