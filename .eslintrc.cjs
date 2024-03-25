module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"airbnb",
		"airbnb-typescript",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"eslint-config-prettier",
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"project": ["./tsconfig.json", "./tsconfig.node.json"],
	},
	"plugins": [
		"@typescript-eslint", "prettier",
	],
	"rules": {
		// Чтобы ESLint не спорил с правилами prettier, при использовании плагина prettier
		"prettier/prettier": [
			"error",
			{
				"endOfLine": "auto",
				"singleQuote": false
			}
		],
		// https://eslint.org/docs/rules/no-unused-vars
		"no-unused-vars": [
			"warn",
			{
				// исключение для JSDoc документации
				"varsIgnorePattern": "^defs"
			}
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				// исключение для JSDoc документации
				"varsIgnorePattern": "^defs"
			}
		],
		"@typescript-eslint/no-shadow": 'off',
		"@typescript-eslint/ban-ts-comment": 'off',
		"@typescript-eslint/no-explicit-any": "off"
	}
};
