import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

const index = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<SEO />
			<div>
				<Header />
				<main className="h-screen w-screen" id="page-wrap">
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default index;
