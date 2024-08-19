
import js from "@eslint/js";

export default {
  ...js.configs.recommended,
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  files: ['test/**/*.mjs'],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
