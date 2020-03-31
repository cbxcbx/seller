// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [0, 4], //缩进风格
    'semi': ['error', 'always'],
    "quotes": [0, "single"], //引号类型 `` "" ''
    "quote-props":[0, "always"], //对象字面量中的属性名是否强制双引号
    'space-before-function-paren': ["error", {
      'named': 'ignore',
      "anonymous": "ignore",
      "asyncArrow": "ignore"
    }]
  }
}
