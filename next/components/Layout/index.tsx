import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

const index = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<SEO />
			<Header />
			<main className="max-w-5xl mx-auto py-5 px-2 md:py-10">{children}</main>
			<Footer />
		</>
	);
};

export default index;
