module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    window: true
  },
  extends: [
    'google',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    camelcase: 'error',
    'no-plusplus': 'error',
    'no-nested-ternary': 'error',
    'no-invalid-this': 'off',
    'no-console': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-duplicate-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ],
    eqeqeq: ['error', 'always'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'require-jsdoc': 'off',
    'spaced-comment': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        arrow: 'parens',
        assignment: 'parens',
        condition: 'parens',
        declaration: 'parens',
        logical: 'parens',
        prop: 'parens',
        return: 'parens-new-line',
      },
    ],
    'react/sort-comp': [
      'warn',
      {
        groups: {
          lifecycle: [
            'statics',
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    indent: ['error', 2, {
      ignoredNodes: [
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
      ]
    }],
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
