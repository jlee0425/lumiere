import Link from 'next/link';
import { useCallback, useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Header = ({ isHome }: { isHome: boolean }) => {
	const [isOpen, setOpen] = useState(false);

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);

	return (
		<header>
			{!isOpen ? (
				<HomeHeader onOpen={handleOpen} isHome={isHome} />
			) : (
				<CloseButton onClose={handleClose} />
			)}
			<BurgerMenu isOpen={isOpen} onClose={handleClose} />
		</header>
	);
};

export default Header;

const HomeHeader = ({
	onOpen,
	isHome,
}: {
	onOpen: () => void;
	isHome: boolean;
}) => {
	return (
		<div
			className={`fixed top-0 left-0  w-full px-5 py-4 z-10 ${
				!isHome && 'bg-black'
			}`}
		>
			<div className="flex justify-between items-center md:w-[1280px] md:mx-auto md:px-2">
				<Link href="/" passHref>
					<a className="text-eggshell-200 text-2xl">Lumière Snap</a>
				</Link>
				<div
					className="flex flex-col space-y-1 cursor-pointer"
					onClick={onOpen}
				>
					<div className={`h-1 w-6 bg-eggshell-200 rounded-md`} />
					<div className={`h-1 w-6 bg-eggshell-200 rounded-md`} />
					<div className={`h-1 w-6 bg-eggshell-200 rounded-md`} />
				</div>
			</div>
		</div>
	);
};

const CloseButton = ({ onClose }: { onClose: () => void }) => {
	return (
		<div
			className="fixed top-1 right-0 cursor-pointer p-3 m-2 z-[9999999]  md:w-[1280px] md:mx-auto md:px-2"
			onClick={onClose}
		>
			<div
				className={`h-1 w-6 bg-white rounded-xl rotate-45 translate-y-[6px]`}
			/>
			<div
				className={`h-1 w-6 bg-white rounded-xl -rotate-45 translate-y-[1.8px]`}
			/>
		</div>
	);
};
