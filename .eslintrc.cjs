module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
    // worker: true,
    // serviceworker: true,
    // webextensions: true,
  },
  globals: {},
  // 使用eslint-config-prettier和eslint-plugin-prettier来忽略掉prettier规则
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      // jsx: true,
    },
  },
  plugins: [],
  rules: {
    'no-unused-vars': ['warn'],
  },
};
