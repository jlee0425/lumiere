/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NAV_MENU } from '../../constants';
import Hamburger from './Hamburger';

const Header = () => {
	const router = useRouter();
	return (
		<header className="flex max-w-5xl mx-auto md:flex-col items-center justify-between">
			<Link href="/home" passHref>
				<img
					className="w-auto h-20 md:h-48 cursor-pointer"
					src="/lumiere_logo_transparent.png"
					alt="Lumiere Logo"
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Link>
			<nav className="hidden md:flex items-center justify-evenly text-xl w-full ">
				{NAV_MENU.map(({ title, to }) => (
					<li
						key={to}
						className={`underline cursor-pointer text-gray-700 drop-shadow-xl  decoration-4 ${
							router.pathname.includes(to)
								? 'decoration-eggshell-700'
								: 'decoration-eggshell-400'
						} underline-offset-4 w-20`}
					>
						<Link href={to} passHref>
							<span>{title}</span>
						</Link>
					</li>
				))}
			</nav>
			<Hamburger />
		</header>
	);
};

export default Header;
