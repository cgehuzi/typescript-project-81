import { readFileSync } from 'fs';

import globals from 'globals';
import eslintjs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

// Импортируем настройки из .prettierrc
const prettierConfig = JSON.parse(
  readFileSync(new URL('.prettierrc', import.meta.url)).toString()
);

export default [
  stylistic.configs.recommended,
  eslintjs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];
