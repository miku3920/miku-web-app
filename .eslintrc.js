module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@/telegram', './dist/telegram.js']],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },
  ignorePatterns: ['dist', 'src'],
}
