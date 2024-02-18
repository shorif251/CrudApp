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
        indent: 0,
        'no-unused-vars': 'off',
        'vars-on-top': 'off',
        'no-var': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
