module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:prettier/recommended',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',

	},


	rules: {},
	plugins:['json-format'],
	parser: "@babel/eslint-parser"
};
