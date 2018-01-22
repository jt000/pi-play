'use strict';

module.exports = {
  "extends": [
    "eslint:recommended",
    "google"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true
  },
  "rules": {
    "require-jsdoc": "off",
    "no-console": "off"
  }
};