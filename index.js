module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './rules/es6',
    './rules/style',
    './rules/babel'
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {}
}
