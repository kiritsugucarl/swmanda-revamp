module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
        files: ['**/*.cjs'],
        env: {
            node: true
        }
    }
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-props-no-multi-spaces': 'error',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'react/function-component-definition': [
        'error',
        {
            namedComponents: ['function-declaration', 'arrow-function'],
            unnamedComponents: 'arrow-function'
        }
    ],
    'prettier/prettier': [
        'error',
        {
            singleQuote: true,
            endOfLine: 'off'
        }
    ]
}
}
