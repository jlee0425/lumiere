import Link from 'next/link';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { NAV_MENU } from '../../constants';

interface Props {
	onClose?: () => void;
}

const HamburgerMenu = ({ onClose }: Props) => {
	return (
		<nav
			className={`absolute top-0 left-0 w-screen h-screen p-10 flex flex-col bg-[#e2d7b1] md:hidden`}
			onClick={onClose}
		>
			<div className="absolute top-5 right-0 flex flex-col items-center  space-y-3 md:hidden h-20 w-16 cursor-pointer">
				<div
					className={`h-[5%] w-2/5 bg-eggshell-700 rounded-xl rotate-45 translate-y-3`}
				/>
				<div
					className={`h-[5%] w-2/5 bg-eggshell-700 rounded-xl -rotate-45 -translate-y-1`}
				/>
			</div>
			<span className="absolute text-[#f0f0d6] top-1/2 -left-60 font-extrabold tracking-widest text-9xl transform rotate-90 opacity-40">
				LUMIERE
			</span>
			<ul className="flex flex-col w-full h-full justify-center align-center gap-14 text-[#fbf9f3] font-bold">
				{NAV_MENU.map(({ title, to }) => (
					<li key="to" className="w-full text-center text-5xl">
						<Link href={to}>{title}</Link>
					</li>
				))}
				<div className="flex flex-row justify-center align-center gap-8">
					<li>
						<Link href={'https://www.instagram.com/youn_changmin'} passHref>
							<FiInstagram className="w-14 h-auto" />
						</Link>
					</li>
					<li>
						<Link href={'https://pf.kakao.com/_gReExb'} passHref>
							<RiKakaoTalkLine className="w-14 h-auto" />
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
};

export default HamburgerMenu;
