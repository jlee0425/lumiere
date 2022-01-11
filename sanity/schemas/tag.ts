export default {
	name: 'tag',
	title: '태그',
	type: 'document',
	fields: [
		{ name: 'tag', type: 'string' },
		{ name: 'slug', type: 'slug', options: { source: 'title' } },
	],
};
