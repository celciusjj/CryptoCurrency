// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-native/no-inline-styles': 'off',
      'react/react-in-jsx-scope': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'dot-notation': 'off',
      radix: 'off',
      curly: 'off',
    },
    ignores: ['dist/*'],
  },
]);
