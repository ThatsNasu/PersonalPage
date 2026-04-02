import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';

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
		files: ['**/*.ts', '**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tseslint.ESLintParser,
			parserOptions: {
				project: './tsconfig.json'
			}
		},
		rules: {
			'prefer-const': 'warn',
			'no-var': 'error',
			'no-console': 'off',
			'@typescript-eslint/no-unused-expressions': 'error'
		}
	},
	{
		files: ['**/*svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser
			}
		},
		rules: {
			'prefer-const': 'warn',
			'no-var': 'error',
			'no-console': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/require-each-key': 'error'
		}
	},
	prettier
];
