/**
 * @type {import('next').NextConfig}
 */

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
		deviceSizes: [360, 768, 1024, 1200, 1920],
	},
};
