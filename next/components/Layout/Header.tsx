/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { NAV_MENU } from '../../constants';

const Header = () => {
	return (
		<header className="flex flex-col items-center justify-center">
			<img
				className="w-auto h-40 md:h-48"
				src="/lumiere_logo.jpg"
				alt="Lumiere Logo"
			/>
			<nav className="flex flex-row items-center justify-evenly text-xl w-screen">
				{NAV_MENU.map(({ title, to }) => (
					<li key="to">
						<Link href={to}>{title}</Link>
					</li>
				))}
			</nav>
		</header>
	);
};

export default Header;
