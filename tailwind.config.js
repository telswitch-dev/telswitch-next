/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector', // This enables dark mode on the application
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			// base font
			sans: '"Plus Jakarta Sans", tahoma, sans-serif',
			// display font
			display: '"Orbitron", sans-serif',
			// alternate base font
			'sans-alt': '"Geologica", verdana, sans-serif',
		},
		extend: {
			screens: {
				max_2xl: { max: '1536px' }, // laptop_lg, desktop
				max_xl: { max: '1280px' }, // laptop
				max_lg: { max: '1024px' }, // laptop_sm, tablet_lg
				max_md: { max: '768px' }, // tablet

				max_m_xl: { max: '430px' }, // iPhone Pro Max, Pixel C
				max_m_lg: { max: '415px' }, // iPhone Pro, Pixel XL ***
				max_m_md: { max: '375px' }, // iPhone, Samsung Galaxy ***
				max_m_sm: { max: '320px' }, // iPhone (older)
			},
			// similar to surface/element idea:
			// https://ryanfeigenbaum.com/dark-mode/
			colors: {
				surface: {
					1: '#E0E4EB',
					2: '#C1C8D7',
					3: '#8290ae',
					4: '#4e5c7b',
					5: '#384054',
					6: '#191c24',
				},
			},
		},
	},
	plugins: [],
}
