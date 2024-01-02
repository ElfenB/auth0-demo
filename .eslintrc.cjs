module.exports = {
  extends: [
    "@boehringer-ingelheim/eslint-config/base/strict",
    // '@boehringer-ingelheim/eslint-config/react',
    // '@boehringer-ingelheim/eslint-config/playwright',
    // NOTE: Prettier has to be the last one to work
    "prettier",
  ],
  rules: {
    // set sorting rules to warn
    "perfectionist/sort-jsx-props": "warn",
    "perfectionist/sort-object-types": "warn",
    "perfectionist/sort-objects": "warn",
    // set consistent type definitions to type instead of interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
};
