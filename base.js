{
   "env": {
      "browser": true,
      "node": true
   },
   "parserOptions": {
      "parser": "babel-eslint"
   },
   "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
   ],
   "rules": {
      "vue/component-name-in-template-casing": [
         1,
         "PascalCalse",
         {
            "registeredComponentsOnly": true
         }
      ],
      "vue/html-indent": [
         2,
         "tab",
         {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 1,
            "alignAttributesVertically": true
         }
      ],
      "array-bracket-newline": [
         2,
         {
            "multiline": true
         }
      ],
      "array-bracket-spacing": [
         2,
         "always",
         {
            "objectsInArrays": true,
            "arraysInArrays": true,
            "singleValue": true
         }
      ],
      "array-element-newline": [
         2,
         "consistent"
      ],
      "block-spacing": [
         2,
         "always"
      ],
      "brace-style": [
         2,
         "1tbs",
         {
            "allowSingleLine": true
         }
      ],
      "camelcase": 2,
      "comma-dangle": [
         2,
         {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
         }
      ],
      "comma-spacing": [
         2,
         {
            "before": false,
            "after": true
         }
      ],
      "comma-style": [
         2,
         "last"
      ],
      "computed-property-spacing": [
         2,
         "always"
      ],
      "consistent-this": [
         2,
         "self"
      ],
      "eol-last": [
         2,
         "always"
      ],
      "func-call-spacing": [
         2,
         "never"
      ],
      "func-names": [
         1,
         "always"
      ],
      "function-paren-newline": [
         2,
         "never"
      ],
      "implicit-arrow-linebreak": [
         2,
         "beside"
      ],
      "indent": [
         2,
         "tab",
         {
            "SwitchCase": 1,
            "VariableDeclarator": 2,
            "MemberExpression": 1,
            "FunctionDeclaration": {
               "body": 1,
               "parameters": "first"
            },
            "FunctionExpression": {
               "body": 1,
               "parameters": "first"
            },
            "CallExpression": {
               "arguments": "first"
            },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false
         }
      ],
      "key-spacing": [
         2,
         {
            "align": {
               "beforeColon": false,
               "afterColon": true,
               "true": "value"
            },
            "multiLine": {
               "beforeColon": false,
               "afterColon": true
            },
            "singleLine": {
               "beforeColon": false,
               "afterColon": true
            }
         }
      ],
      "keyword-spacing": [
         2,
         {
            "before": true,
            "after": true
         }
      ],
      "lines-between-class-members": [
         2,
         "always",
         {
            "exceptAfterSingleLine": true
         }
      ],
      "newline-per-chained-call": [
         2,
         {
            "ignoreChainWithDepth": 2
         }
      ],
      "no-array-constructor": 2,
      "no-bitwise": "warn",
      "no-continue": 2,
      "no-lonely-if": 2,
      "no-mixed-spaces-and-tabs": [
         2,
         "smart-tabs"
      ],
      "no-multi-assign": 2,
      "no-new-object": 2,
      "no-trailing-spaces": 2,
      "no-unneeded-ternary": 2,
      "no-whitespace-before-property": 2,
      "nonblock-statement-body-position": [
         2,
         "beside"
      ],
      "object-curly-newline": [
         2,
         {
            "multiline": true,
            "consistent": true
         }
      ],
      "object-curly-spacing": [
         2,
         "always",
         {
            "arraysInObjects": false,
            "objectsInObjects": false
         }
      ],
      "object-property-newline": 2,
      "one-var-declaration-per-line": [
         2,
         "initializations"
      ],
      "padded-blocks": [
         2,
         {
            "classes": "always",
            "blocks": "never",
            "switches": "never"
         }
      ],
      "prefer-object-spread": 2,
      "quote-props": [
         2,
         "as-needed",
         {
            "numbers": true,
            "keywords": true,
            "unnecessary": true
         }
      ],
      "quotes": [
         2,
         "single"
      ],
      "semi": [
         2,
         "never",
         {
            "beforeStatementContinuationChars": "always"
         }
      ],
      "space-before-blocks": [
         2,
         {
            "functions": "always",
            "keywords": "always",
            "classes": "always"
         }
      ],
      "space-before-function-paren": [
         2,
         {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "always"
         }
      ],
      "space-in-parens": [
         1,
         "always",
         {
            "exceptions": [
               "empty"
            ]
         }
      ],
      "space-infix-ops": [
         2,
         {
            "int32Hint": true
         }
      ],
      "space-unary-ops": [
         2,
         {
            "words": true,
            "nonwords": false
         }
      ],
      "switch-colon-spacing": [
         2,
         {
            "after": true,
            "before": false
         }
      ],
      "wrap-regex": 2,
      "no-console": 1
   }
}