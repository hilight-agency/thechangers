module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
