{
   "env": {
      "es6": true
   },
   extends: [
      "./laut-eslint-base.yaml"
   ],
   rules: {
      "prefer-arrow-callback": 1,
      "no-var": 1,
      "prefer-const": 1,
      "prefer-rest-params": 1,
      "prefer-spread": 1,
      "prefer-destructuring": 1,
      "arrow-body-style": [
         2,
         "as-needed"
      ],
      "arrow-parens": [
         2,
         "as-needed"
      ],
      "arrow-spacing": [
         2,
         {
            before: true,
            after: true
         }
      ],
      "func-names": [
         1,
         "as-needed"
      ]
   }
}
