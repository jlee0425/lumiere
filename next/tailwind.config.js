const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				'eggshell-100': '#fbf9f3',
				'eggshell-200': '#f5f1e4',
				'eggshell-400': '#f0ead6',
				'eggshell-700': '#c1a855',
			},
		},
		...defaultTheme,
	},
	plugins: [],
};
