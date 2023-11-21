module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'warn',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
