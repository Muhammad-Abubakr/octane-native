module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: false,
    es6: true,
  },
  extends: '@react-native-community',
  globals: {
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
  },
};

