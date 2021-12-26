import { GoHome } from 'react-icons/go';
import { GrGallery } from 'react-icons/gr';
import { BsCamera } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/Fi';
import { RiKakaoTalkLine } from 'react-icons/Ri';

export const NAV_MENU = [
	{
		title: 'Home',
		to: '/',
		icon: GoHome,
	},
	{
		title: 'Gallery',
		to: '/gallery',
		icon: GrGallery,
	},
	{
		title: 'Product',
		to: '/product',
		icon: BsCamera,
	},
	{
		title: 'Instagram',
		to: 'https://www.instagram.com/youn_changmin',
		icon: FiInstagram,
	},
	{
		title: 'Contact',
		to: '/contact',
		icon: RiKakaoTalkLine,
	},
];
