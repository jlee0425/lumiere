import Link from 'next/link';
import React, { useCallback, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const BurgerMenu = ({ isOpen, onClose }: Props) => {
	return (
		<Menu
			outerContainerId="outer-container"
			pageWrapId="page-wrap"
			isOpen={isOpen}
			onClose={onClose}
			className="w-[100vw] h-full p-5"
			overlayClassName="opacity-0"
		>
			<span className="absolute text-eggshell-700 top-2/3 -left-44 font-extrabold tracking-widest text-8xl transform rotate-90 opacity-40 -z-[1]">
				Lumière
			</span>
			<div className="flex flex-col space-y-6 z-[1101]">
				<GalleryMenu />
				{MENUS.map(({ url, title }) => (
					<MenuLink key={`header-main-link-${title}`} url={url} title={title} />
				))}
			</div>
		</Menu>
	);
};

export default BurgerMenu;

const GalleryMenu = () => {
	return (
		<li>
			<span className="text-2xl text-eggshell-200 cursor-pointer">Gallery</span>
			<ul className={`flex flex-col pl-4 space-y-2 pt-3 `}>
				{GALLERY_SUB_MENU.map(({ url, title }, idx) =>
					idx === 0 ? (
						<div className="flex flex-col">
							<MenuLink title={title} url={url} size="sm" isFirst />
							<ul className={`flex flex-col pl-8 space-y-2 pt-3 `}>
								{PARIS_SUB_MENU.map(({ title, url }, idx) => (
									<MenuLink
										key={`paris-menu-${title}`}
										url={url}
										title={title}
										size="sm"
										isFirst={idx === 0}
										twStyles={idx > 0 ? 'pl-6' : ''}
									/>
								))}
							</ul>
						</div>
					) : (
						<MenuLink title={title} url={url} size="sm" twStyles="pl-6" />
					)
				)}
			</ul>
		</li>
	);
};

const MenuLink = ({
	url,
	title,
	isFirst,
	size = 'md',
	twStyles,
}: MenuProps) => {
	return (
		<li>
			<Link href={url} passHref>
				{isFirst ? (
					<a className="text-xl text-eggshell-200 cursor-pointer">
						<strong>└ </strong>
						{title}
					</a>
				) : (
					<a
						className={
							`${
								size === 'md' ? 'text-2xl' : 'text-xl'
							} text-eggshell-200 cursor-pointer ` + twStyles
						}
					>
						{title}
					</a>
				)}
			</Link>
		</li>
	);
};

type MenuProps = {
	url: string;
	title: string;
	isFirst?: boolean;
	size?: 'sm' | 'md';
	twStyles?: string;
};
const MENUS: MenuProps[] = [
	{ url: '/process', title: 'Process' },
	{ url: '/product', title: 'Product' },
	{ url: '', title: 'Instagram' },
	{ url: '', title: 'Contact' },
];

const GALLERY_SUB_MENU = [
	{ url: '/gallery/paris', title: 'Paris' },
	{ url: '/gallery/jeju', title: 'Jeju' },
	{ url: '/gallery/side-projects', title: 'Portfolio' },
];

const PARIS_SUB_MENU = [
	{ url: '/gallery/paris/eiffel-sunrise', title: 'Eiffel At Sunrise' },
	{ url: '/gallery/paris/eiffel-sunset', title: 'Eiffel At Sunset' },
	{ url: '/gallery/paris/louvre-sunset', title: 'Louvre At Sunset' },
	{ url: '/gallery/paris/night', title: 'Paris At Night' },
];
