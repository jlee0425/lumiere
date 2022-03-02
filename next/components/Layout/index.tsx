import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

const index = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<SEO />
			<Header />
			<main className="h-full max-w-5xl mx-auto py-5 px-2 pb-28 md:py-10 md:pb-20">
				{children}
			</main>
			<Footer />
		</>
	);
};

export default index;
