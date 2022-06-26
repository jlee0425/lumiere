import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<RecoilRoot>
			<Layout>
				{/* @ts-ignore */}
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
};

export default App;
