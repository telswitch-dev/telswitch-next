import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
	plugins: [
		vue(),
		EnvironmentPlugin(['CONTENTFUL_SPACE_ID', 'CONTENTFUL_ACCESS_TOKEN']), // Include env variables
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 8881,
	},
})
