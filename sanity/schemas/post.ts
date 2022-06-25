export default {
	name: 'post',
	title: '포스트',
	type: 'document',

	fields: [
		{ name: 'title', title: '제목', type: 'string' },
		{
			name: 'slug',
			type: 'slug',
			description: '신경안써도 됨.',
			options: { source: 'title' },
		},
		{ name: 'content', title: '내용', type: 'block' },
		{ name: 'images', title: '이미지', type: 'array', of: [{ type: 'image' }] },
	],
};
