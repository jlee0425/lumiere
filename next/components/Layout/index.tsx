import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import Header from './Header';
import SEO from './SEO';

const Layout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	const isHome = useMemo(() => router.asPath === '/', [router]);

	return (
		<>
			<SEO />
			<div className="scrollbar-hide overflow-scroll">
				<Header isHome={isHome} />
				<main
					className={`h-screen w-screen ${
						isHome ? '' : 'pt-16'
					} scrollbar-hide overflow-scroll`}
					id="page-wrap"
				>
					{children}
				</main>
				{/* <Footer /> */}
			</div>
		</>
	);
};

export default Layout;
