/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			nearBlack: '#100f10',
			white: '#ffffff',
			waterBlue: '#2FA4FF'
		},
		fontFamily: {
			sans: ['Montserrat'],
			header:['Poppins']
		}
	},
	plugins: []
};
