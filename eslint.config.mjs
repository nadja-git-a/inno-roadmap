import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: [js.configs.recommended],
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
    rules: {
      files: ['**/*.{js,mjs,cjs}'],
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'no-unused-vars': 'off',
    },
  },
]);
