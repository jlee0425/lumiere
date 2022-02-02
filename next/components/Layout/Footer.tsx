import Link from 'next/link';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { RiKakaoTalkLine } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-screen bg-eggshell-200 flex flex-col text-center p-3 text-gray-700">
			<p className="text-lg">
				<span className="mr-5">루미에르스냅</span>
				<span>대표 윤창민</span>
			</p>
			<p>
				<span className="text-md">사업자등록번호 861-17-01493</span>
			</p>
			<div className="absolute right-20 bottom-5 flex">
				<Link href={'https://www.instagram.com/youn_changmin'} passHref>
					<FiInstagram className="w-8 h-auto mr-5 text-stone-500 drop-shadow-md hover:text-stone-600 cursor-pointer" />
				</Link>
				<Link href={'https://pf.kakao.com/_gReExb'} passHref>
					<RiKakaoTalkLine className="w-8 h-auto text-stone-500 drop-shadow-md hover:text-stone-600 cursor-pointer" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
