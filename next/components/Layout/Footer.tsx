import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { INSTA_LINK, KATALK_LINK } from '../../constants';

const Footer = () => {
	return (
		<footer className="relative bottom-0 w-screen bg-eggshell-200 flex flex-col justify-center items-center text-center p-3 text-gray-700">
			<p className="text-lg">
				<span className="mr-5">루미에르스냅</span>
				<span>대표 윤창민</span>
			</p>
			<p>
				<span className="text-md">사업자등록번호 861-17-01493</span>
			</p>
			<div className="mt-2 md:absolute right-20 bottom-5 flex">
				<a href={INSTA_LINK} target="_blank" rel="noreferrer">
					<FiInstagram className="w-8 h-auto mr-5 text-stone-500 drop-shadow-md hover:text-stone-600 cursor-pointer" />
				</a>
				<a
					target="popup"
					onClick={() =>
						window.open(KATALK_LINK, '루미에르 스냅', 'width=360, height=800')
					}
				>
					<RiKakaoTalkLine className="w-8 h-auto text-stone-500 drop-shadow-md hover:text-stone-600 cursor-pointer" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
