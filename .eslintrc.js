module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  parser: '@babel/eslint-parser', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: ['import', 'jsx'],
  root: true, // For configuration cascading.
  rules: {
    indent: [
      'error',
      2
    ],
    quotes: [
      'warn',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'jsx-quotes': [
      'warn',
      'prefer-double'
    ],
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
};