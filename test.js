module.exports = {
  extends: [
    './',
    './rules/test',
  ].map(require.resolve),
  env: {
    mocha: true
  },
  rules: {}
}
