export default {
	name: 'linkedImage',
	title: '링크달린이미지',
	type: 'document',
	fields: [
		{ name: 'title', title: '제목', type: 'string' },
		{ name: 'slug', title: 'slug', type: 'slug' },
		{
			name: 'link',
			type: 'url',
			title: '링크',
		},
		{
			name: 'image',
			title: '이미지',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
