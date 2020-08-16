module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"airbnb-typescript",
	],
	parserOptions: {
		project: "./tsconfig.json",
	},
	rules: {
		// consoleは使っていい
		"no-console": "off",
		// クォートはダブルクォート
		"@typescript-eslint/quotes": ["error", "double"],
		// インデントはタブ
		"@typescript-eslint/indent": ["error", "tab"],
		// 行辺りの文字数は80じゃなくて160
		"max-len": ["error", { code: 160 }],
		// インデントにタブは使っていい（途中のタブは駄目）
		"no-tabs": ["error", { allowIndentationTabs: true }],
		// インデントはタブ！
		"react/jsx-indent": ["error", "tab"],
		// インデントはタブ！！
		"react/jsx-indent-props": ["error", "tab"],
		// desructing使うかどうかくらいはこっちで選ばせてもらいたい気持ち
		"react/destructuring-assignment": "off",
		// tsなのでprop-typesはいらない
		"react/prop-types": "off",
	}
};

