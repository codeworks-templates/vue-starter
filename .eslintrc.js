module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],

  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-unused-vars': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [1, 'never'],
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 'off'
  }
}
