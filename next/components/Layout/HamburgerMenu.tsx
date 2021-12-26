import Link from 'next/link';
import React from 'react';
import { NAV_MENU } from '../../constants';

interface Props {
	onClose: () => void;
	open: boolean;
}
const HamburgerMenu = ({ onClose, open }: Props) => {
	return (
		<div className={`w-screen h-screen p-10 flex flex-col `}>
			{NAV_MENU.map(({ title, to }) => (
				<li key="to" className="flex flex-row align-center">
					<Link href={to}>{title}</Link>
				</li>
			))}
		</div>
	);
};

export default HamburgerMenu;
