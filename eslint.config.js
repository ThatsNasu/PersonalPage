import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'node_modules',
			'.svelte-kit',
			'build',
			'dist',
			'package',
			'*.md',
			'eslint.config.js',
			'svelte.config.js'
		]
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.ts', '**/*.js', '**/*.svelte'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tseslint.ESLintParser,
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		},
		rules: {
			'prefer-const': 'warn',
			'no-var': 'error',
			'no-console': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/require-each-key': 'error',
			'@typescript-eslint/no-unused-expressions': 'error'
		}
	},
	prettier
];
