# Styleguides

## Installation

`npm i -D @lautag/eslint-config babel-eslint eslint eslint-plugin-import eslint-plugin-vue`

## Usage

Make sure that you extend `@lautag` in your eslint file.

**preference is .eslintrc.js**, however you can use `.yaml`, `.yml`, or `.json`

```javascript
// .eslintrc.js
module.exports = {
    "root": true,
    "extends": "@lautag"
}
```

```yaml
// .eslintrc.yaml or .eslintrc.yml
---
root: true
extends: @lautag 
```

```json
// .eslintrc.json
{
    "root": true,
    "extends": "@lautag"
}
```

### Advanced Usage

The eslint package includes rules for Vue, ES6, and regular javascript. It is possilbe to pick and choose exactly which configs you want by extending specific files.

ex: only use base config
```javascript
module.exports = {
    "root": true,
    "extends": [
        "@lautag/eslint-config/base"
    ]
}
```

ex: just base and vue
```javascript
module.exports = {
    "root": true,
    "extends": [
        "@lautag/eslint-config/base",
        "@lautag/eslint-config/vue"
    ]
}
```

## Notes

- The `base` config extends `eslint:recommended`
- the `vue` config extends `plugin:vue/recommended`
