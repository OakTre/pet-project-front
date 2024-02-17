/* eslint-env node */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'airbnb-base',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: ['vue', 'prettier'],
    rules: {
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'linebreak-style': 'off',
        'import/no-unresolved': 'off',
        'no-plusplus': 'off'
    },
    overrides: [
        {
            files: ['**/*.vue'],
            rules: {
                'no-undef': 'off',
                'max-len': [
                    'off',
                    {
                        code: 100,
                        ignoreUrls: true
                    }
                ]
            }
        }
    ],
    ignorePatterns: ['node_modules/*'],
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.vue', '.json', '.js']
            }
        }
    }
}
