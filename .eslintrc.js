module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:storybook/recommended",
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    "import/order": [
      "error",
      {
        "groups": [
          "external",
          "internal",
          "type",
          ["sibling", "parent"],
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "alphabetize": {
          "order": "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          "caseInsensitive": true /* ignore case. Options: [true, false] */
        },
        "newlines-between": "always"
      }
    ]
  },
};
