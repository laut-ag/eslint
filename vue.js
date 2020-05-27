module.exports = {
   "extends": [
      "plugin:vue/recommended"
   ],
    "rules": {
     "vue/component-name-in-template-casing": [
         1,
         "PascalCase",
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
    }
}
