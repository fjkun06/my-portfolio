/* eslint-disable no-undef */
module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "import", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        printWidth: 90,
        tabWidth: 2,
        semi: true,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
        ignoreTemplateLiterals: true
      }
    ],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
        offsetTernaryExpressions: true
      }
    ],
    "linebreak-style": [0, "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": "off",

    "max-len": [
      "error",
      {
        code: 90,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreRegExpLiterals: true
      }
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "react/react-in-jsx-scope": ["off"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
