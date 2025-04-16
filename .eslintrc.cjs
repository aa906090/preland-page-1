/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['prettier', 'simple-import-sort'],
  // Base config
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ['!**/.server', '!**/.client'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'react/jsx-no-bind': [
          'warn',
          {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
          },
        ],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/self-closing-comp': [
          'warn',
          {
            component: true,
            html: true,
          },
        ],
        'react/jsx-boolean-value': ['error'],
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-misused-new': ['error'],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-magic-numbers': [
          'warn',
          {
            enforceConst: true,
            ignoreEnums: true,
            ignoreReadonlyClassProperties: true,
            ignore: [-1, 0, 1, 2],
          },
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
            readonly: 'array',
          },
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreProperties: true,
            ignoreParameters: true,
          },
        ],
      },
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        jsxSingleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        arrowParens: 'avoid',
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // 1. Side effect imports (e.g., 'import "./setup";')
          ['^\\u0000'],

          // 2. Node.js builtins
          ['^node:'],

          // 3. External packages (React first if needed)
          ['^react$', '^react', '^@?\\w'],

          // 4. Internal aliases (e.g. '~/**' or '@/**')
          ['^~/', '^@/'],

          // 5. Parent imports (e.g. ../foo)
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // 6. Sibling imports (e.g. ./foo)
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // 7. Style imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    curly: 'error',
    'guard-for-in': 'error',
    'no-labels': 'error',
    'no-bitwise': 'error',
    'no-loop-func': 'error',
    'no-constructor-return': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-throw-literal': 'warn',
    'no-var': 'error',
    'no-extra-bind': 'error',
  },
};
