module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/prefer-default-export': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
      },
    },
  },
};
