module.exports = {
  env: {},
  globals: {},
  settings: {},
  extends: [
    "eslint:recommended",
    "prettier",
    "@eomerx/eslint-config/core.js",
    "@eomerx/eslint-config/common.js",
    "@eomerx/eslint-config/babel.js",
    "@eomerx/eslint-config/promise.js",
    "@eomerx/eslint-config/lodash.js",
    "@eomerx/eslint-config/import.js",
    "@eomerx/eslint-config/import-helpers.js",
    "@eomerx/eslint-config/import-name.js"
  ],
  plugins: [],
  parserOptions: {},
  rules: {
    "no-async-promise-executor": 0,
    "no-process-exit": 0,
    "no-unsafe-finally": 0
  }
};
