/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				nearBlack: '#100f10',
				waterBlue: '#2FA4FF'
			}
		},
		fontFamily: {
			mont: ['Montserrat', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			header: ['Poppins', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
