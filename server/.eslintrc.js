module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
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
    ecmaVersion: 'latest',
  },
  rules: {
    'no-plusplus': 'off',
    'no-console': 0,
    'no-unused-vars': 'off',
    'no-var': 0,
    'import/no-extraneous-dependencies': 0,
    'new-cap': 0,
    'no-underscore-dangle': 0,
    'max-len': 0,
    'eslint-disable jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'object-curly-newline': 0,
  },
};
