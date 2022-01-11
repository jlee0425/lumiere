export default {
	name: 'photo',
	title: '사진',
	type: 'document',
	fields: [
		{ name: 'title', title: '타이틀', type: 'string' },
		{ name: 'slug', type: 'slug', options: { source: 'title' } },
		{ name: 'desc', type: 'string', title: '설명' },
		{ name: 'photo', type: 'image', title: '사진' },
		{
			name: 'tag',
			type: 'array',
			title: '태그',
			of: [{ type: 'reference', to: [{ type: 'tag' }] }],
		},
	],
};
