module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'unused-imports',
    'better-styled-components'
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react'
  ],
  ignorePatterns: [
    'cdk8s/*',
    'src/components/TermsAndConditionsPage/constants.ts'
  ],
  rules: {
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-return-await': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-throw-literal': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message:
              'Import RootState from Core is denied. Use RootState of current project',
            group: ['astra-core/**/*/RootState']
          }
        ]
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-default-export': 'error',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-console': 'off',
    'no-debugger': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }
    ],
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'better-styled-components/sort-declarations-alphabetically': 2
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    }
  }
}
