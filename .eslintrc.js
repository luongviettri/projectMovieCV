// eslint-disable-next-line no-undef
module.exports = {
  env: {
    amd: true,
    browser: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    // enable additional rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "padded-blocks": ["error", "never"]
    // semi: ["error", "never"],
  },
  plugins: ["react"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 7,
    requireConfigFile: false,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ["@babel/react"]
    }
  },
  globals: {
    localStorage: true,
    process: true
  }
};
