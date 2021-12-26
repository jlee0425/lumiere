import React, { useCallback, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleBurger = useCallback(() => setOpen((cur) => !cur), []);
	return (
		<>
			<div
				className="absolute top-0 right-0 h-[7rem] w-16 flex flex-col items-center pt-6 space-y-1 md:hidden  cursor-pointer"
				onClick={toggleBurger}
			>
				<div className={`h-[4%] w-2/5 bg-eggshell-700 rounded-xl`} />
				<div className={`h-[5%] w-2/5 bg-eggshell-700 rounded-xl`} />
				<div className={`h-[5%] w-2/5 bg-eggshell-700 rounded-xl`} />
			</div>
			{isOpen && <HamburgerMenu onClose={toggleBurger} />}
		</>
	);
};

export default Hamburger;
