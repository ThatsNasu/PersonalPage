import js from "@eslint/js";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";

export default [
	// Ignore build + generated files
	{
	ignores: [
		"node_modules",
		".svelte-kit",
		"build",
		"dist",
		"package",
		"*.md"
	]
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs["flat/recommended"],
	{
	files: ["**/*.ts", "**/*.js", "**/*.svelte"],
	languageOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
		"warn",
		{
			argsIgnorePattern: "^_"
		}
		],
		"no-console": "off",
		"prefer-const": "warn",
		"no-var": "error"
	}
	},
	prettier
];