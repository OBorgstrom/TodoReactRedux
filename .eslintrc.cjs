module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react-hooks', 'prettier'],
  env: {
    browser: true,
  },
  globals: {
    __DEV__: 'readonly',
  },
  ignorePatterns: ['vite.config.ts'],
  rules: {
    'no-bitwise': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'comma-dangle': ['error', 'always-multiline'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-no-bind': 'off',
    'react/forbid-prop-types': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*Slice.js', '*Reducers.js'], // Redux-toolkit slices use immer
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['e2e/**/*.js', '__tests__/**/*.js', '__mocks__/**/*.js'],
      plugins: ['jest', 'detox'],
      env: {
        jest: true,
        'detox/detox': true,
      },
      rules: { 'global-require': 'off' },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      rules: {
        semi: 'off',
        'no-bitwise': 'off',
        'operator-linebreak': 'off',
        'no-console': 'warn',
        'arrow-parens': ['error', 'as-needed'],
        'object-curly-newline': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/semi': 'off',
        'react/jsx-no-bind': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/order': ['error', { 'newlines-between': 'always' }],
        'max-len': [
          'error',
          100,
          2,
          {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'no-confusing-arrow': 'off',
        'import/extensions': [
          'error',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always',
          },
        ],
        'no-await-in-loop': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message:
              'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          },
          {
            selector: 'LabeledStatement',
            message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
            selector: 'WithStatement',
            message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['*Slice.ts', '*Reducers.ts'], // Redux-toolkit slices use immer
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['*.stories.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
}
