module.exports = {
    env: {
        jest: true,
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error'],
        'no-return-await': ['error'],
        'default-case-last': ['error'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'no-confusing-arrow': ['error'],
        'no-duplicate-imports': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error'],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
    extends: 'eslint:recommended'
};