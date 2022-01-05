/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { NAV_MENU } from '../../constants';
import Hamburger from './Hamburger';

const Header = () => {
	return (
		<header className="flex md:flex-col items-center justify-between">
			<img
				className="w-auto h-20 md:h-48 cursor-pointer"
				src="/lumiere_logo_transparent.png"
				alt="Lumiere Logo"
			/>
			<nav className="hidden md:flex items-center justify-evenly text-xl w-screen">
				{NAV_MENU.map(({ title, to }) => (
					<li key="to">
						<Link href={to}>{title}</Link>
					</li>
				))}
			</nav>
			<Hamburger />
		</header>
	);
};

export default Header;
