import { GoHome } from 'react-icons/go';
import { GrGallery } from 'react-icons/gr';
import { BsCamera } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/Fi';
import { RiKakaoTalkLine } from 'react-icons/Ri';

export const NAV_MENU = [
	{
		title: 'HOME',
		to: '/',
	},
	{
		title: 'GALLERY',
		to: '/gallery',
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
