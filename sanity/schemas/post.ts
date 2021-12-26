export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'slug', type: 'slug', options: { source: 'title' } },
		{ name: 'content', type: 'text' },
		{ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
	],
};
