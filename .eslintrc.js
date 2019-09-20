module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "no-eval": "error",
        "no-var": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "no-duplicate-variable": true,
                    "no-trailing-whitespace": true,
                    "one-line": [
                        true,
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "quotemark": [
                        true,
                        "single"
                    ],
                    "semicolon": [
                        true,
                        "always"
                    ],
                    "triple-equals": [
                        true,
                        "allow-null-check"
                    ],
                    "variable-name": [
                        true,
                        "ban-keywords"
                    ],
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type"
                    ]
                }
            }
        ]
    }
};
