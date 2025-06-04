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

				max_m_xl: { max: '440px' }, // iPhone Pro Max, Pixel C
				max_m_lg: { max: '415px' }, // iPhone Pro, Pixel XL ***
				max_m_md: { max: '375px' }, // iPhone, Samsung Galaxy ***
				max_m_sm: { max: '320px' }, // iPhone (older)
			},
			// similar to surface/element idea:
			// https://ryanfeigenbaum.com/dark-mode/
			colors: {
				// surface: {
				// 	1: '#e5e2ea',
				// 	2: '#c1bbce',
				// 	3: '#9e95b2',
				// 	4: '#685d81',
				// 	5: '#534a66',
				// 	6: '#3a3448',
				// },
				// surface: {
				// 	1: '#D3D7D8',
				// 	2: '#A8B0B3',
				// 	3: '#7F8B8F',
				// 	4: '#58686D',
				// 	5: '#36464B',
				// 	6: '#1D2628',
				// },
				surface: {
					1: '#E0E4EB',
					2: '#C1C8D7',
					3: '#8290ae',
					4: '#4e5c7b',
					5: '#384054',
					6: '#191c24',
				},
				// Grayscale Design palette: https://grayscale.design/app?lums=93.87,77.19,63.32,51.32,40.97,32.07,24.45,17.94,12.41,7.73,3.80&palettes=%23FF874D,%23463F57,%233F5157,%233F5852,%23745345,%2357463F&filters=0%7C0.6,0%7C0,0%7C0,0%7C0,0%7C0,0%7C0&names=ts-orange-coral,ts-purple-wine,ts-blue-spruce,ts-green-mineral,ts-coffee-roman,ts-brown-kabul&labels=,,,,,
				'ts-orange-coral': {
					50: '#fff5f0',
					100: '#ffdccb',
					200: '#ffc4a7',
					300: '#ffac83',
					400: '#ff8d54',
					500: '#ff6a20',
					600: '#e64d00',
					700: '#d24600',
					800: '#b63d00',
					900: '#8b2e00',
					950: '#682300',
				},
				'ts-purple-wine': {
					50: '#f8f8fa',
					100: '#e5e2ea',
					200: '#d2cedc',
					300: '#c1bbce',
					400: '#afa8c0',
					500: '#9e95b2',
					600: '#8d82a5',
					700: '#7b6f97',
					800: '#685d81',
					900: '#534a66',
					950: '#3a3448',
				},
				'ts-blue-spruce': {
					50: '#f6f8f9',
					100: '#dee5e7',
					200: '#c6d2d6',
					300: '#b1c1c6',
					400: '#9aafb6',
					500: '#859ea6',
					600: '#6e8c96',
					700: '#5f7a83',
					800: '#4f666e',
					900: '#405258',
					950: '#2c393d',
				},
				'ts-green-mineral': {
					50: '#f6f9f8',
					100: '#dce6e4',
					200: '#c3d4d0',
					300: '#abc3bd',
					400: '#93b2ab',
					500: '#7ca198',
					600: '#679086',
					700: '#597d75',
					800: '#4b6962',
					900: '#3b534d',
					950: '#2a3a36',
				},
				'ts-coffee-roman': {
					50: '#faf8f7',
					100: '#ebe2de',
					200: '#ddcdc6',
					300: '#d0b9b0',
					400: '#c3a69a',
					500: '#b59283',
					600: '#a87e6c',
					700: '#966c5a',
					800: '#7f5b4c',
					900: '#65483c',
					950: '#46322a',
				},
				'ts-brown-kabul': {
					50: '#f9f8f7',
					100: '#e8e2df',
					200: '#d8ceca',
					300: '#c9bbb5',
					400: '#baa8a0',
					500: '#ab958b',
					600: '#9c8277',
					700: '#8b7065',
					800: '#755e54',
					900: '#5d4b43',
					950: '#41342f',
				},
			},
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				outline: [
					'1px 1px 0 rgba(0, 0, 0, 0.35)',
					'1.5px 1.5px 0 rgba(0, 0, 0, 0.30)',
					'2px 2px 0 rgba(0, 0, 0, 0.25)',
					'2.5px 2.5px 0 rgba(0, 0, 0, 0.20)',
					'3px 3px 0 rgba(0, 0, 0, 0.15)',
				],
				glow: ['0 0 1.25rem rgba(255, 255, 255, 0.22)'],
			},
		},
	},
	plugins: [],
}
