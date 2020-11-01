const { off } = require("./models/user");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'eslint-disable-next-line': off,
    'consistent-return': off,
  },
};
