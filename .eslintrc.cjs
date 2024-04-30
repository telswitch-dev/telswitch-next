module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
	},
	// extends: ['eslint:recommended', 'prettier'],
	extends: ['plugin:vue/vue3-recommended', 'prettier', '@vue/prettier'],
	plugins: ['html'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'no-tabs': 'off',
		eqeqeq: ['error', 'always'],
		indent: 'off',
		quotes: ['error', 'single'],
		semi: [2, 'never'],
		// 'no-unused-vars': 'warn',
		'object-curly-spacing': [2, 'always'],
		'prettier/prettier': 'error',
	},
}
