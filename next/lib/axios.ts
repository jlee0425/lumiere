import axios from 'axios';

const customAxios = axios.create({
	baseURL: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_SANITY_DATASET}/default`,
});

customAxios.defaults.headers.common[
	'Authorization'
] = `Bearer ${process.env.SANITY_API_TOKEN}`;

customAxios.defaults.headers.common['Content-Type'] = 'application/json';

customAxios.interceptors.request.use(
	(config) => config,
	(error) => console.error(error)
);

customAxios.interceptors.response.use(
	async (res) => {
		// console.log('Axios res: ', JSON.stringify(res.data));
		return res;
	},
	(error) => console.error(error)
);

export default customAxios;
