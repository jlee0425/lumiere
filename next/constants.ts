import { RiKakaoTalkLine } from 'react-icons/ri';

export const endpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`;
export const INSTA_LINK = 'https://www.instagram.com/youn_changmin';
export const KATALK_LINK = 'https://pf.kakao.com/_gReExb';

export const NAV_MENU = [
	{
		title: 'HOME',
		to: '/home',
	},
	{
		title: 'GALLERY',
		to: '/gallery/side-projects',
	},
	{
		title: 'PRODUCT',
		to: '/product',
	},
];

export const SOCIAL_MEDIA = [
	{
		title: 'Instagram',
		to: 'https://www.instagram.com/youn_changmin',
		// icon: <FiInstagram />,
	},
	{
		title: 'Contact',
		to: '/contact',
		icon: RiKakaoTalkLine,
	},
];
